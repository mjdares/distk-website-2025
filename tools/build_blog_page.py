import re, json, sys, os
os.chdir('/home/mayank/distk Website')
SRC = 'blog/gpt-6-astra-marketing-guide-2026.html'
src = open(SRC, encoding='utf-8').read()
STYLE = re.search(r'<style>.*?</style>', src, re.S).group(0)
HEAD_TOP = src.split('<meta charset')[0]
TRACK = re.search(r'<link rel="icon".*?</noscript>\n', src, re.S).group(0)
FONTS = re.search(r'<link rel="preconnect".*?rel="stylesheet">\n', src, re.S).group(0)
NAV = re.search(r'<nav class="nav">.*?</nav>\n', src, re.S).group(0)
FOOT = re.search(r'<footer class="foot">.*?</html>\n', src, re.S).group(0)
MONTHS = {'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}

def page(m):
    date = m.get('date', '2026-09-13')
    mon = MONTHS.get(date[5:7], 'Sep') + ' ' + date[:4]
    url = f"https://distk.in/blog/{m['slug']}"
    faq_ld = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in m['faq_ld']]}
    about = [{"@type":"Thing","name":n} for n in m.get('about', [])]
    art_ld = {"@context":"https://schema.org","@type":"Article","headline":m['headline'],"description":m['ld_desc'],"author":{"@type":"Organization","name":"Distk","url":"https://distk.in"},"publisher":{"@type":"Organization","name":"Distk","logo":{"@type":"ImageObject","url":"https://distk.in/assets/images/Logo.png"}},"datePublished":date,"dateModified":date,"inLanguage":"en","about":about,"mentions":about,"mainEntityOfPage":{"@type":"WebPage","@id":url}}
    crumb_ld = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://distk.in/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://distk.in/blog/"},{"@type":"ListItem","position":3,"name":m['headline'],"item":url}]}
    style = STYLE.replace("content:'GPT-6'", f"content:'{m['watermark']}'")
    faq_html = "\n".join(f'      <div class="faq__item">\n        <h3>{q}</h3>\n        <p>{a}</p>\n      </div>' for q,a in m['faq_html'])
    return f'''{HEAD_TOP}<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
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
<script type="application/ld+json">{json.dumps(crumb_ld, ensure_ascii=False)}</script>
{TRACK}{FONTS}{style}
</head>
<body>
{NAV}
<section class="hero">
  <div class="prose">
    <div class="hero__tag">{m.get('tag', 'AI Model Guide')}</div>
    <h1>{m['h1']}</h1>
    <p class="hero__sub">{m['sub']}</p>
    <div class="hero__meta">
      <span>Distk Editorial</span>
      <span>{mon}</span>
      <span>{m['read']} min read</span>
    </div>
  </div>
</section>

<div class="prose">
  <div class="tldr">
    <p>{m['tldr']}</p>
  </div>
</div>

<main class="article">
  <div class="prose">
{m['body']}
  </div>
</main>

<section class="faq">
  <div class="container">
    <div class="section-tag">Key Questions</div>
    <h2 class="section-title">{m['faq_title']}</h2>
    <div class="faq__grid">
{faq_html}
    </div>
  </div>
</section>

<section class="cta">
  <div class="cta__inner">
    <h2>{m['cta_h']}</h2>
    <p>{m['cta_p']}</p>
    <a href="https://distk.in/#contact" class="cta__btn">Start the conversation →</a>
  </div>
</section>

{FOOT}'''

if __name__ == '__main__':
    import importlib.util
    for arg in sys.argv[1:]:
        spec = importlib.util.spec_from_file_location('c', arg); c = importlib.util.module_from_spec(spec); spec.loader.exec_module(c)
        out = page(c.M)
        assert '—' not in out, f'em dash in {arg}'
        for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>', out, re.S): json.loads(blk)
        assert len(c.M['faq_ld']) >= 5 and len(c.M['faq_html']) >= 6, arg
        n = out.count('2026'); assert n >= 15, (arg, n)
        words = len(re.sub(r'<[^>]+>', ' ', c.M['body']).split())
        open(f"blog/{c.M['slug']}", 'w', encoding='utf-8').write(out)
        print(f"{c.M['slug']}: {n} x 2026, ~{words} body words, 3 schemas ok")
