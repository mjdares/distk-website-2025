#!/usr/bin/env python3
"""
build_blog_page.py  -  render a blog post from a content module + tools/blog_template.html

The page chrome (analytics, fonts, CSS, nav, hero/tldr/article/faq/cta skeleton, footer)
lives in tools/blog_template.html as an editable HTML file with {{TOKEN}} placeholders.
Edit that file to restyle every future post. This script only generates the meta and
schema block and fills the tokens.

Usage:
  python3 tools/build_blog_page.py path/to/post_module.py [more_modules.py ...]

Each module defines M = dict(...) with:
  required : slug, title, desc, keywords, headline, ld_desc, og_desc, h1, sub, read,
             tldr, body, faq_title, faq_html (6+ (q, a) pairs), faq_ld (5+ pairs),
             cta_h, cta_p, watermark
  optional : date (default 2026-09-13), tag (default 'AI Model Guide'),
             about (entity names for Article about/mentions)
"""
import re, json, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
TEMPLATE = os.path.join('tools', 'blog_template.html')
MONTHS = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
          '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'}


def head_meta(m, date, url):
    """The per-post <meta>/<title>/JSON-LD block that replaces {{HEAD_META}}."""
    about = [{"@type": "Thing", "name": n} for n in m.get('about', [])]
    art_ld = {"@context": "https://schema.org", "@type": "Article", "headline": m['headline'],
              "description": m['ld_desc'],
              "author": {"@type": "Organization", "name": "Distk", "url": "https://distk.in"},
              "publisher": {"@type": "Organization", "name": "Distk",
                            "logo": {"@type": "ImageObject", "url": "https://distk.in/assets/images/Logo.png"}},
              "datePublished": date, "dateModified": date, "inLanguage": "en",
              "about": about, "mentions": about,
              "mainEntityOfPage": {"@type": "WebPage", "@id": url}}
    faq_ld = {"@context": "https://schema.org", "@type": "FAQPage",
              "mainEntity": [{"@type": "Question", "name": q,
                              "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in m['faq_ld']]}
    crumb_ld = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://distk.in/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://distk.in/blog/"},
        {"@type": "ListItem", "position": 3, "name": m['headline'], "item": url}]}
    return f'''<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{m['title']}</title>
<meta name="description" content="{m['desc']}">
<meta name="keywords" content="{m['keywords']}">
<meta name="author" content="Distk"><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article"><meta property="og:url" content="{url}">
<meta property="og:title" content="{m['headline']}">
<meta property="og:description" content="{m['og_desc']}">
<meta property="og:image" content="https://distk.in/assets/images/og-image.jpg"><meta property="og:site_name" content="Distk">
<meta property="article:published_time" content="{date}T00:00:00+05:30">
<meta property="article:modified_time" content="{date}T00:00:00+05:30">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{m['headline']}"><meta name="twitter:description" content="{m['og_desc']}">
<script type="application/ld+json">{json.dumps(art_ld, ensure_ascii=False)}</script>
<script type="application/ld+json">{json.dumps(faq_ld, ensure_ascii=False)}</script>
<script type="application/ld+json">{json.dumps(crumb_ld, ensure_ascii=False)}</script>'''


def page(m):
    date = m.get('date', '2026-09-13')
    url = f"https://distk.in/blog/{m['slug']}"
    faq_items = "\n".join(
        f'      <div class="faq__item">\n        <h3>{q}</h3>\n        <p>{a}</p>\n      </div>'
        for q, a in m['faq_html'])
    fill = {
        'HEAD_META': head_meta(m, date, url),
        'WATERMARK': m['watermark'],
        'TAG': m.get('tag', 'AI Model Guide'),
        'H1': m['h1'],
        'SUB': m['sub'],
        'MONTH': MONTHS.get(date[5:7], 'Sep') + ' ' + date[:4],
        'READ': str(m['read']),
        'TLDR': m['tldr'],
        'BODY': m['body'],
        'FAQ_TITLE': m['faq_title'],
        'FAQ_ITEMS': faq_items,
        'CTA_H': m['cta_h'],
        'CTA_P': m['cta_p'],
    }
    out = open(TEMPLATE, encoding='utf-8').read()
    for k, v in fill.items():
        out = out.replace('{{' + k + '}}', v)
    left = sorted(set(re.findall(r'\{\{[A-Z0-9_]+\}\}', out)))
    assert not left, f"unfilled template tokens: {left}"
    return out


def main(args):
    import importlib.util
    for arg in args:
        spec = importlib.util.spec_from_file_location('c', arg)
        c = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(c)
        out = page(c.M)
        assert '—' not in out, f'em dash in {arg}'
        for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>', out, re.S):
            json.loads(blk)
        assert len(c.M['faq_ld']) >= 5 and len(c.M['faq_html']) >= 6, arg
        n = out.count('2026')
        assert n >= 15, (arg, n)
        words = len(re.sub(r'<[^>]+>', ' ', c.M['body']).split())
        open(f"blog/{c.M['slug']}", 'w', encoding='utf-8').write(out)
        print(f"{c.M['slug']}: {n} x 2026, ~{words} body words, 3 schemas ok")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(sys.argv[1:])
