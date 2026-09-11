#!/usr/bin/env python3
"""
update_sitemap.py  -  keep sitemap.xml honest, in place.

For every <url> block (comments and ordering preserved):
  * lastmod  = date of the latest git commit that touched the file, ignoring
               housekeeping commits (internal-link rebuilds, sitemap-only edits,
               and any commit touching more than 20 files, e.g. site-wide nav,
               analytics or mascot rollouts).
               Falls back to the blog post's article:published_time, then today.
  * priority / changefreq follow one scheme:
        homepage                      1.0 weekly
        blog index                    0.9 daily
        service / landing pages       0.9 monthly
        about, tools, misc pages      0.8 monthly
        legal pages                   0.4 yearly
        blog posts <= 90 days old     1.0 weekly
        blog posts  > 90 days old     0.8 monthly
Missing blog posts on disk are appended before the closing </urlset>.
Usage:  python3 tools/update_sitemap.py [--dry-run]
"""
import os, re, sys, glob, subprocess, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SITEMAP = os.path.join(ROOT, "sitemap.xml")
DRY = "--dry-run" in sys.argv
TODAY = datetime.date.today()
HOUSEKEEPING = re.compile(r"internal.link|related.reading|link builder|sitemap|data-cluster|zone.identifier|owl|mascot|clarity|analytics tag", re.I)
MASS_COMMIT_FILES = 20   # a commit touching more files than this is site-wide plumbing, not a content update
_touch_cache = {}


def files_touched(h):
    if h not in _touch_cache:
        out = subprocess.run(["git", "diff-tree", "--no-commit-id", "--name-only", "-r", h], cwd=ROOT, capture_output=True, text=True).stdout
        _touch_cache[h] = len(out.splitlines())
    return _touch_cache[h]
LEGAL = {"privacy.html", "terms.html", "refund.html", "shipping.html", "success.html", "visibility-success.html"}
SERVICE_HINT = re.compile(r"marketing-agency|geo-services|distk-visibility|brand-kickstart|hiring-training-ops|remote-marketing|global-marketing|100-brands")
EXCLUDE_BLOG = {"saas-pricing-ai-era-per-seat-dying-2026.html"}  # intentional orphan


RELATED_LINE = re.compile(r"RELATED (START|END)|class=\"related\"|Related reading|border-left:2px solid #e63312|list-style:none|^[+-]\s*</?(ul|div|section)>?\s*$|^[+-]\s*$")


def only_related_changed(h, path):
    """True when this commit's diff for `path` touches nothing but the Related-reading block."""
    out = subprocess.run(["git", "show", "--format=", h, "--", path], cwd=ROOT, capture_output=True, text=True).stdout
    changed = [l for l in out.splitlines() if (l.startswith("+") or l.startswith("-")) and not l.startswith(("+++", "---"))]
    return bool(changed) and all(RELATED_LINE.search(l) for l in changed)


def git_lastmod(path):
    out = subprocess.run(["git", "log", "--format=%cs|%h|%s", "--", path], cwd=ROOT, capture_output=True, text=True).stdout
    lines = out.splitlines()
    for line in lines:
        d, h, msg = line.split("|", 2)
        if HOUSEKEEPING.search(msg) or files_touched(h) > MASS_COMMIT_FILES or only_related_changed(h, path):
            continue
        return d
    # every commit was plumbing: fall back to the file's first commit (its publish date)
    return lines[-1].split("|", 1)[0] if lines else None


def published_meta(path):
    try:
        head = open(os.path.join(ROOT, path), encoding="utf-8", errors="ignore").read(8000)
    except OSError:
        return None
    m = re.search(r'article:published_time" content="(\d{4}-\d{2}-\d{2})', head)
    return m.group(1) if m else None


def lastmod_for(path):
    return git_lastmod(path) or published_meta(path) or TODAY.isoformat()


def scheme(rel, lastmod):
    if rel in ("", "index.html"):
        return "1.0", "weekly"
    if rel in ("blog/", "blog/index.html"):
        return "0.9", "daily"
    if rel.startswith("blog/"):
        age = (TODAY - datetime.date.fromisoformat(lastmod)).days
        return ("1.0", "weekly") if age <= 90 else ("0.8", "monthly")
    if rel in LEGAL:
        return "0.4", "yearly"
    if SERVICE_HINT.search(rel):
        return "0.9", "monthly"
    return "0.8", "monthly"


def main():
    xml = open(SITEMAP, encoding="utf-8").read()
    seen, changed = set(), 0

    def fix(m):
        nonlocal changed
        block = m.group(0)
        loc = re.search(r"<loc>(.*?)</loc>", block).group(1).strip()
        rel = loc.replace("https://distk.in/", "")
        seen.add(rel)
        path = "index.html" if rel == "" else ("blog/index.html" if rel == "blog/" else rel)
        lm = lastmod_for(path)
        pr, cf = scheme(rel, lm)
        new = re.sub(r"<lastmod>.*?</lastmod>", f"<lastmod>{lm}</lastmod>", block)
        new = re.sub(r"<changefreq>.*?</changefreq>", f"<changefreq>{cf}</changefreq>", new)
        new = re.sub(r"<priority>.*?</priority>", f"<priority>{pr}</priority>", new)
        if new != block:
            changed += 1
            if DRY:
                print(f"  {rel or '/'}: {lm} {cf} {pr}")
        return new

    xml = re.sub(r"<url>.*?</url>", fix, xml, flags=re.S)

    # append blog posts that exist on disk but not in the sitemap
    added = []
    for f in sorted(glob.glob(os.path.join(ROOT, "blog", "*.html"))):
        name = os.path.basename(f)
        rel = f"blog/{name}"
        if name == "index.html" or name in EXCLUDE_BLOG or rel in seen:
            continue
        lm = lastmod_for(rel)
        pr, cf = scheme(rel, lm)
        added.append(f"    <url>\n        <loc>https://distk.in/{rel}</loc>\n        <lastmod>{lm}</lastmod>\n        <changefreq>{cf}</changefreq>\n        <priority>{pr}</priority>\n    </url>\n")
    if added:
        stamp = TODAY.strftime("%B %Y")
        xml = xml.replace("</urlset>", f"    <!-- Added {stamp} -->\n" + "".join(added) + "\n</urlset>")

    print(f"entries updated: {changed} | entries added: {len(added)}")
    for a in added:
        print("  +", re.search(r"<loc>(.*?)</loc>", a).group(1))
    if not DRY:
        open(SITEMAP, "w", encoding="utf-8").write(xml)
        print("WRITTEN")


if __name__ == "__main__":
    main()
