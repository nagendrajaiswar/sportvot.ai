#!/usr/bin/env python3
"""Assembles SportVot interactive rebuild — GSAP-driven pages."""
import os
ROOT = os.path.dirname(os.path.abspath(__file__))

HEADER = """  <header class="site-header">
    <div class="container nav">
      <a href="index.html" class="nav-logo">Sport<span>Vot</span></a>
      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="for-organisations.html">For Organisations</a>
        <a href="play.html">SportVot Play</a>
        <a href="solutions.html">Solutions</a>
        <a href="news.html">News</a>
        <a href="about.html">About Us</a>
        <a href="live-tv.html" class="nav-live">● Live TV</a>
      </nav>
      <div class="nav-actions">
        <a href="contact.html" class="btn btn-outline btn-sm magnetic"><span>Get in Touch</span></a>
        <a href="for-organisations.html#proposal" class="btn btn-primary btn-sm magnetic"><span>Get a Proposal</span></a>
        <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span class="hamburger"></span></button>
      </div>
    </div>
  </header>
"""

FOOTER = """  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="nav-logo">Sport<span>Vot</span></a>
          <p style="margin-top:16px;color:var(--sv-text-muted);font-size:14px;max-width:280px;">
            The global sports production platform — live production, streaming and analytics for every level of the game.
          </p>
          <div class="footer-social" style="margin-top:20px;">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="X / Twitter">X</a>
          </div>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="for-organisations.html">For Organisations</a></li>
            <li><a href="play.html">SportVot Play</a></li>
            <li><a href="live-tv.html">SportVot OTT — Live TV</a></li>
            <li><a href="solutions.html">Cloud Studio &amp; Capabilities</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="case-studies.html">Case Studies</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Get Started</h4>
          <ul>
            <li><a href="for-organisations.html#proposal">Get a Proposal</a></li>
            <li><a href="live-tv.html">Watch Live Sports</a></li>
            <li><a href="mailto:hello@sportvot.ai">hello@sportvot.ai</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 SportVot. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </div>
  </footer>
"""

CDN_SCRIPTS = """<script src="assets/js/vendor/gsap.min.js"></script>
<script src="assets/js/vendor/ScrollTrigger.min.js"></script>
"""

def page(title, description, body, extra_head=""):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
{extra_head}</head>
<body>
{HEADER}
{body}
{FOOTER}
{CDN_SCRIPTS}
<script src="assets/js/main.js"></script>
</body>
</html>
"""

def write(name, html):
    with open(os.path.join(ROOT, name), "w") as f:
        f.write(html)
    print("wrote", name)

if __name__ == "__main__":
    import pages
    for name, (title, desc, body) in pages.PAGES.items():
        write(name, page(title, desc, body))
