#!/usr/bin/env python3
"""
publish_posts.py  -  run the whole publish routine for a batch of new blog posts.

Given a JSON manifest, this:
  1. validates each post file (exists, 3 JSON-LD blocks parse, no em-dash, "2026" >= 15,
     6+ visible FAQs, internal links resolve)
  2. inserts a blog-card into blog/index.html above the current highest-numbered card,
     numbering the batch upward from the current maximum
  3. appends an llms.txt line per post under the Featured Guides section (optional)
  4. runs tools/build_internal_links.py then tools/update_sitemap.py
  5. re-validates sitemap XML

Manifest format (JSON list, oldest-first is fine, cards are emitted newest-first).
Only "slug" and "category" are required: title, excerpt and read time are filled from the
post's own <h1>, meta description and hero meta when omitted, and "llms": true reuses the
excerpt as the llms.txt line.
  [{"slug": "foo-2026.html",
    "title": "Foo in 2026: ...",
    "category": "AI Models",          # reuse an existing blog/index.html label
    "excerpt": "Two or three sentences stating a concrete fact from the post.",
    "read": 12,                        # minutes
    "month": "October 2026",           # optional, defaults to current month
    "llms": "One line for llms.txt."   # optional; omit to skip llms.txt for this post
   }, ...]

Usage:
  python3 tools/publish_posts.py manifest.json            # validate, insert, rebuild
  python3 tools/publish_posts.py manifest.json --dry-run  # validate and report only
"""
import json
import os
import re
import subprocess
import sys
import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
INDEX = os.path.join("blog", "index.html")
LLMS = "llms.txt"
DRY = "--dry-run" in sys.argv
CARD_NUM_RE = re.compile(r"<!-- Blog Card #(\d+)")


def validate(slug):
    """Return a list of problems with blog/<slug>."""
    path = os.path.join("blog", slug)
    if not os.path.exists(path):
        return [f"missing file {path}"]
    s = open(path, encoding="utf-8").read()
    problems = []
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S)
    if len(blocks) < 3:
        problems.append(f"{len(blocks)} JSON-LD blocks, expected 3")
    for b in blocks:
        try:
            json.loads(b)
        except json.JSONDecodeError as e:
            problems.append(f"invalid JSON-LD: {e}")
    if "—" in s:
        problems.append("contains an em-dash")
    n = s.count("2026")
    if n < 15:
        problems.append(f'only {n} mentions of "2026"')
    faqs = s.count('class="faq__item"')
    if faqs < 6:
        problems.append(f"{faqs} visible FAQ items, expected 6+")
    for href in re.findall(r'href="((?!http|mailto|#|/)[^"]+)"', s):
        target = os.path.normpath(os.path.join("blog", href.split("#")[0]))
        if not os.path.exists(target):
            problems.append(f"broken link {href}")
    return problems


def fill_from_file(post):
    """Fill title, excerpt and read time from the post's own <title>, meta description and hero meta."""
    s = open(os.path.join("blog", post["slug"]), encoding="utf-8").read()
    if not post.get("title"):
        m = re.search(r"<h1>(.*?)</h1>", s, re.S)
        post["title"] = re.sub(r"<[^>]+>", "", m.group(1)).strip() if m else post["slug"]
    if not post.get("excerpt"):
        m = re.search(r'<meta name="description" content="([^"]*)"', s)
        post["excerpt"] = m.group(1) if m else ""
    if not post.get("read"):
        m = re.search(r"<span>(\d+) min read</span>", s)
        post["read"] = int(m.group(1)) if m else 10
    if post.get("llms") is True:
        post["llms"] = post["excerpt"]
    return post


def card(num, post, month):
    return (
        f'                        <!-- Blog Card #{num} - {post["slug"].replace("-2026.html", "")} -->\n'
        f'                        <article class="blog-card">\n'
        f'                            <span class="blog-card__category">{post["category"]}</span>\n'
        f'                            <h2 class="blog-card__title"><a href="{post["slug"]}">{post["title"]}</a></h2>\n'
        f'                            <p class="blog-card__excerpt">{post["excerpt"]}</p>\n'
        f'                            <div class="blog-card__meta"><span>{month}</span>'
        f'<span>{post["read"]} min read</span><span>{post["category"]}</span></div>\n'
        f'                        </article>\n\n'
    )


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        sys.exit(__doc__)
    posts = json.load(open(args[0], encoding="utf-8"))
    if isinstance(posts, dict):
        posts = [posts]

    # 1. validate
    failed = False
    for p in posts:
        problems = validate(p["slug"])
        status = "OK" if not problems else "FAIL"
        print(f"  [{status}] {p['slug']}")
        for pr in problems:
            print(f"         - {pr}")
            failed = True
    if failed:
        sys.exit("\nvalidation failed; nothing written")
    posts = [fill_from_file(p) for p in posts]
    if DRY:
        print("\ndry run: validation passed, no files changed")
        return

    # 2. cards, numbered upward from the current maximum, newest at the top
    index = open(INDEX, encoding="utf-8").read()
    nums = [int(m.group(1)) for m in CARD_NUM_RE.finditer(index)]
    top = max(nums)
    anchor = f"                        <!-- Blog Card #{top}"
    assert anchor in index, f"could not find card #{top} anchor in {INDEX}"
    default_month = datetime.date.today().strftime("%B %Y")
    numbered = [(top + i + 1, p) for i, p in enumerate(posts)]
    block = "".join(card(n, p, p.get("month", default_month)) for n, p in reversed(numbered))
    index = index.replace(anchor, block + anchor, 1)
    open(INDEX, "w", encoding="utf-8").write(index)
    print(f"\ncards added: #{top + 1} to #{top + len(posts)}")

    # 3. llms.txt
    lines = [p for p in posts if p.get("llms")]
    if lines:
        s = open(LLMS, encoding="utf-8").read()
        head = "## Featured Guides (September 2026)\n"
        if head in s:
            entries = "".join(
                f'- [{p["title"].split(":")[0]}](https://distk.in/blog/{p["slug"]}): {p["llms"]}\n'
                for p in lines)
            s = s.replace(head, head + "\n" + entries, 1)
            open(LLMS, "w", encoding="utf-8").write(s)
            print(f"llms.txt: {len(lines)} entries added")
        else:
            print("llms.txt: Featured Guides heading not found, skipped")

    # 4. rebuild internal links and sitemap
    for script in ("tools/build_internal_links.py", "tools/update_sitemap.py"):
        out = subprocess.run([sys.executable, script], capture_output=True, text=True)
        tail = [l for l in out.stdout.strip().splitlines() if l.strip()][-3:]
        print(f"\n{script}:")
        for l in tail:
            print("  " + l)

    # 5. sitemap XML
    import xml.etree.ElementTree as ET
    ET.parse("sitemap.xml")
    print("\nsitemap XML valid. Ready to commit.")


if __name__ == "__main__":
    main()
