#!/usr/bin/env python3
"""
build_internal_links.py  —  Phase A internal-linking for the distk.in blog.

What it does (idempotent, safe to re-run after every new post):
  1. Reads blog/index.html as the canonical catalog of all posts {slug,title,category}.
  2. Assigns each post a keyword-based macro-cluster (slug -> title -> category).
  3. Injects a self-contained "Related reading" block of 5 links into every
     NEW-TEMPLATE post (detected by the presence of <section class="cta">),
     immediately before that CTA section. Link pool = ALL posts.
  4. Tags each index blog-card with data-cluster and adds a filter+search UI.

Re-running replaces content between the <!-- RELATED START/END --> markers
rather than duplicating, so partial progress self-heals.

Usage:
  python3 tools/build_internal_links.py --dry-run   # report only, no writes
  python3 tools/build_internal_links.py             # write changes
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
BLOG_DIR = os.path.join(os.path.dirname(HERE), "blog")
INDEX = os.path.join(BLOG_DIR, "index.html")
DRY = "--dry-run" in sys.argv
N_RELATED = 5

# --- cluster definitions: id -> (label, [keywords]) ; first match wins ---
CLUSTERS = [
    ("ai-models",        "AI Models",        ["glm", "gemini", "claude", "fable", "mythos", "gemma", "gpt", "-model", "open-source", "open-weights", "synthid", "llm-"]),
    ("ai-agents",        "AI Agents",        ["agent", "agentic", "hermes", "-mcp", "autopilot", "second-brain"]),
    ("ai-video-creative","AI Video & Creative",["video", "-flow-", "omni", "image", "nano-banana", "stitch", "pomelli", "creative", "design-tool", "ui-generation", "audio"]),
    ("ai-dev",           "AI Development",   ["-api", "self-host", "vllm", "livekit", "cloud-run", "developer", "coding-agent", "fine-tun"]),
    ("seo-aeo-geo",      "SEO / AEO / GEO",  ["seo", "aeo", "geo", "llmo", "answer-engine", "zero-click", "voice-search", "sge", "schema", "serp", "ai-search", "sxo", "crawler"]),
    ("whatsapp-messaging","WhatsApp & Messaging",["whatsapp", "sms", "conversational", "chatbot", "inbox", "rcs"]),
    ("paid-ads",         "Paid Media",       ["google-ads", "ppc", "paid-", "performance", "programmatic", "youtube-ads", "paid-search", "paid-media"]),
    ("d2c-ecommerce",    "D2C & Ecommerce",  ["d2c", "ecommerce", "commerce", "retail", "-cart", "shopify", "omnichannel", "cpg"]),
    ("b2b-saas-gtm",     "B2B / SaaS / GTM", ["b2b", "saas", "gtm", "product-led", "plg", "demand-gen", "abm", "go-to-market"]),
    ("agency-ops",       "Agency & Ops",     ["agency", "retainer", "fractional-cmo", "pricing", "hiring", "rfp", "vetting", "onboarding", "procurement"]),
    ("sales-crm",        "Sales & CRM",      ["sales", "crm", "lead", "outreach", "cold-email", "cold-outreach", "nurtur", "prospect"]),
    ("content-social",   "Content & Social", ["content", "social", "influencer", "linkedin", "podcast", "-pr-", "public-relations", "branding", "brand-", "reels", "shorts"]),
    ("analytics-martech","Analytics & MarTech",["analytics", "data-", "martech", "reporting", "attribution", "automation", "salesforce", "hubspot"]),
]
CLUSTER_LABELS = {cid: label for cid, label, _ in CLUSTERS}
CLUSTER_LABELS["industry"] = "Industry"
CLUSTER_LABELS["general"] = "General"

STOP = set("the a an and or for to of in on with how what why is are your you и 2026 2025 guide best top vs your get not why does can".split())

CARD_RE = re.compile(r'<article class="blog-card"[^>]*>(.*?)</article>', re.S)
CAT_RE = re.compile(r'blog-card__category">(.*?)</span>', re.S)
TITLE_RE = re.compile(r'blog-card__title">\s*<a\s+href="(.*?)"[^>]*>(.*?)</a>', re.S)
ART_OPEN_RE = re.compile(r'<article class="blog-card"[^>]*>')
RELATED_BLOCK_RE = re.compile(r'\n*[ \t]*<!-- RELATED START -->.*?<!-- RELATED END -->[ \t]*\n*', re.S)


def cluster_of(slug, title, category):
    hay = f"-{slug.lower()}- {title.lower()} {category.lower()}"
    for cid, _label, kws in CLUSTERS:
        for kw in kws:
            if kw in hay:
                return cid
    # vertical-industry fallback
    for v in ["healthcare", "real-estate", "legal", "fintech", "insurance", "travel",
              "restaurant", "education", "edtech", "automotive", "manufacturing",
              "logistics", "luxury", "fashion", "gaming", "sports", "proptech",
              "agritech", "cleantech", "hr-tech", "crypto", "industrial", "mental-health"]:
        if v in slug.lower():
            return "industry"
    return "general"


def tokens(title):
    t = re.sub(r'<[^>]+>', '', title).lower()
    return {w for w in re.split(r'[^a-z0-9]+', t) if w and w not in STOP and len(w) > 2}


def load_catalog():
    html = open(INDEX, encoding="utf-8").read()
    cat = []
    for m in CARD_RE.finditer(html):
        block = m.group(1)
        tm = TITLE_RE.search(block)
        cm = CAT_RE.search(block)
        if not tm:
            continue
        href = tm.group(1).strip()
        title = re.sub(r'\s+', ' ', tm.group(2)).strip()
        category = (cm.group(1).strip() if cm else "")
        slug = href[:-5] if href.endswith(".html") else href
        cat.append({
            "href": href, "slug": slug, "title": title, "category": category,
            "cluster": cluster_of(slug, title, category), "idx": len(cat),
            "tok": tokens(title),
        })
    return cat


def related_for(post, catalog):
    others = [p for p in catalog if p["href"] != post["href"]]
    def rank(p):
        shared = len(post["tok"] & p["tok"])
        same = 1 if p["cluster"] == post["cluster"] else 0
        # sort key: same-cluster first, then most shared tokens, then recency (low idx)
        return (-same, -shared, p["idx"])
    others.sort(key=rank)
    return others[:N_RELATED]


def clean_title(t):
    # standing rule: no em-dashes in any content. Normalize em/en dashes pulled from titles.
    t = t.replace(" — ", ", ").replace(" – ", ", ")
    t = t.replace("—", "-").replace("–", "-")
    return t


def related_block(posts):
    items = "\n".join(
        f'      <li style="border-left:2px solid #e63312;padding-left:1rem">'
        f'<a href="{p["href"]}" style="font-family:\'Outfit\',sans-serif;font-size:1rem;'
        f'font-weight:500;color:#0a0a0a;text-decoration:none;line-height:1.5">{clean_title(p["title"])}</a></li>'
        for p in posts
    )
    return (
        "<!-- RELATED START -->\n"
        '<section class="related" style="padding:3.5rem 0;border-top:1px solid #e8e8e8;background:#fafafa">\n'
        '  <div style="max-width:720px;margin:0 auto;padding:0 clamp(1.2rem,4vw,3rem)">\n'
        '    <div style="font-family:\'Space Mono\',monospace;font-size:0.7rem;letter-spacing:0.14em;'
        'text-transform:uppercase;color:#e63312;margin-bottom:1.3rem">Related reading</div>\n'
        '    <ul style="list-style:none;margin:0;padding:0;display:grid;gap:0.9rem">\n'
        f"{items}\n"
        "    </ul>\n"
        "  </div>\n"
        "</section>\n"
        "<!-- RELATED END -->\n"
    )


def inject_posts(catalog):
    by_href = {p["href"]: p for p in catalog}
    updated, skipped_no_cta = 0, 0
    for p in catalog:
        path = os.path.join(BLOG_DIR, p["href"])
        if not os.path.exists(path):
            continue
        html = open(path, encoding="utf-8").read()
        if '<section class="cta">' not in html:
            skipped_no_cta += 1
            continue
        rel = related_for(p, catalog)
        block = related_block(rel)
        html = RELATED_BLOCK_RE.sub("\n\n", html)  # remove prior block, normalize spacing (idempotent)
        html = html.replace('<section class="cta">', block + '<section class="cta">', 1)
        if not DRY:
            open(path, "w", encoding="utf-8").write(html)
        updated += 1
    return updated, skipped_no_cta


FILTER_UI = """<!-- FILTER UI START -->
<div class="blog-filter" id="blogFilter" style="max-width:1120px;margin:0 auto 1.5rem;padding:0 clamp(1.2rem,4vw,3rem)">
  <input id="blogSearch" type="search" placeholder="Search articles..." style="width:100%;padding:0.8rem 1rem;font-family:'Outfit',sans-serif;font-size:0.95rem;border:1px solid #e8e8e8;border-radius:6px;margin-bottom:1rem;background:#fff">
  <div id="blogChips" style="display:flex;flex-wrap:wrap;gap:0.5rem"></div>
</div>
<!-- FILTER UI END -->
"""

FILTER_JS_TEMPLATE = """<!-- FILTER JS START -->
<script>
(function(){
  var LABELS = __LABELS__;
  var grid = document.getElementById('blogGrid');
  if(!grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.blog-card'));
  var chipsBox = document.getElementById('blogChips');
  var search = document.getElementById('blogSearch');
  var counts = {};
  cards.forEach(function(c){var k=c.getAttribute('data-cluster')||'general';counts[k]=(counts[k]||0)+1;});
  var active = 'all';
  function mkChip(id,label,n){
    var b=document.createElement('button');
    b.textContent=label+(n?' ('+n+')':'');
    b.setAttribute('data-id',id);
    b.style.cssText="font-family:'Space Mono',monospace;font-size:0.65rem;letter-spacing:0.06em;text-transform:uppercase;padding:0.45rem 0.9rem;border:1px solid #e8e8e8;background:#fff;color:#6b6b6b;cursor:pointer;border-radius:999px";
    b.onclick=function(){active=id;render();paint();};
    return b;
  }
  function paint(){
    Array.prototype.forEach.call(chipsBox.children,function(ch){
      var on=ch.getAttribute('data-id')===active;
      ch.style.background=on?'#e63312':'#fff';
      ch.style.color=on?'#fff':'#6b6b6b';
      ch.style.borderColor=on?'#e63312':'#e8e8e8';
    });
  }
  chipsBox.appendChild(mkChip('all','All',cards.length));
  Object.keys(counts).sort(function(a,b){return counts[b]-counts[a];}).forEach(function(k){
    chipsBox.appendChild(mkChip(k,LABELS[k]||k,counts[k]));
  });
  function render(){
    var q=(search.value||'').toLowerCase().trim();
    cards.forEach(function(c){
      var okCat=active==='all'||c.getAttribute('data-cluster')===active;
      var okQ=!q||c.textContent.toLowerCase().indexOf(q)>-1;
      c.style.display=(okCat&&okQ)?'':'none';
    });
  }
  search.addEventListener('input',render);
  paint();
})();
</script>
<!-- FILTER JS END -->
"""


def update_index(catalog):
    html = open(INDEX, encoding="utf-8").read()
    by_href = {p["href"]: p for p in catalog}

    # 1. tag each blog-card opening tag with data-cluster
    def add_cluster(m):
        block = m.group(0)
        tm = TITLE_RE.search(block)
        cid = by_href.get(tm.group(1).strip(), {}).get("cluster", "general") if tm else "general"
        return ART_OPEN_RE.sub(f'<article class="blog-card" data-cluster="{cid}">', block, 1)
    html = CARD_RE.sub(add_cluster, html)

    # 2. insert filter UI before the grid (idempotent)
    html = re.sub(r'\n?<!-- FILTER UI START -->.*?<!-- FILTER UI END -->\n?', '\n', html, flags=re.S)
    html = html.replace('<div class="blog-grid" id="blogGrid">',
                        FILTER_UI + '<div class="blog-grid" id="blogGrid">', 1)

    # 3. insert filter JS before </body> (idempotent)
    labels = "{" + ",".join(f'"{k}":"{v}"' for k, v in CLUSTER_LABELS.items()) + "}"
    js = FILTER_JS_TEMPLATE.replace("__LABELS__", labels)
    html = re.sub(r'\n?<!-- FILTER JS START -->.*?<!-- FILTER JS END -->\n?', '\n', html, flags=re.S)
    html = html.replace('</body>', js + '</body>', 1)

    if not DRY:
        open(INDEX, "w", encoding="utf-8").write(html)


def main():
    catalog = load_catalog()
    from collections import Counter
    dist = Counter(p["cluster"] for p in catalog)
    print(f"catalog posts: {len(catalog)}")
    print("cluster distribution:")
    for cid, n in dist.most_common():
        print(f"  {cid:20s} {n}")
    updated, skipped = inject_posts(catalog)
    update_index(catalog)
    mode = "DRY-RUN (no writes)" if DRY else "WRITTEN"
    print(f"\n{mode}")
    print(f"new-template posts injected: {updated}")
    print(f"old-template posts skipped (no cta, Phase B): {skipped}")
    print(f"internal links added: ~{updated * N_RELATED}")


if __name__ == "__main__":
    main()
