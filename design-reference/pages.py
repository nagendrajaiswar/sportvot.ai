# -*- coding: utf-8 -*-
# Interactive rebuild — content reused from the first pass, markup rebuilt for scroll-driven interaction.

# NOTE: swap the <source src> below for a real SportVot match reel (mp4, muted-safe, ~15-25s loop).
# The JS in main.js hides this element gracefully via onerror if the file 404s, falling back to the
# CSS gradient background on .hero so nothing ever shows a broken-video icon.
HERO_VIDEO = """<video class="hero-video" autoplay muted loop playsinline
        onerror="this.style.display='none'">
        <source src="assets/video/hero-reel.mp4" type="video/mp4">
      </video>"""

HOME = f"""
  <section class="hero">
    {HERO_VIDEO}
    <div class="hero-overlay"></div>
    <div class="hero-noise"></div>
    <div class="container hero-content">
      <p class="eyebrow" data-reveal>The Global Sports Production Platform</p>
      <h1 style="margin-top:20px;">
        <span class="line">Every Game.</span>
        <span class="line">Every Moment.</span>
        <span class="line"><span class="accent">LIVE.</span></span>
      </h1>
      <p class="hero-sub">Professional sports broadcasting for clubs, academies, leagues, and federations — in 5 minutes, from any camera, anywhere in the world.</p>
      <div class="pipeline"><b>Capture</b><span>／</span><b>Produce</b><span>／</span><b>Stream</b><span>／</span><b>Distribute</b></div>
      <div class="hero-ctas">
        <a href="for-organisations.html#proposal" class="btn btn-primary magnetic"><span>Get a Proposal</span></a>
        <a href="live-tv.html" class="btn btn-outline magnetic"><span>▶ Watch Live Sports</span></a>
      </div>
    </div>
    <div class="scroll-cue"><span>Scroll</span><span class="stick"></span></div>
  </section>

  <div class="marquee-wrap">
    <div class="marquee">
      <span class="logo-chip">600,000+ Games Produced</span>
      <span class="logo-chip">52+ Sports</span>
      <span class="logo-chip">32+ Countries</span>
      <span class="logo-chip">75+ Federations</span>
      <span class="logo-chip">100Mn+ Digital Viewers</span>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head center" style="margin:0 auto 56px;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">What Brings You Here?</p>
        <h2>Whether you run tournaments or want to play in one — SportVot has a world built for you.</h2>
      </div>
      <div class="fork-grid" data-reveal-group>
        <a href="for-organisations.html" class="fork-card blue">
          <span class="tag">For Organisations</span>
          <h3>I want to stream and produce my sport.</h3>
          <p class="audience">Clubs · Academies · Leagues · Federations · Associations</p>
          <p class="body">Take your tournaments, matches, and leagues live, with multi-camera capture, broadcast-quality graphics, live scoring, advertisement cues, multi-lingual commentary, and automated highlights. No broadcast crew. No expensive hardware.</p>
          <span class="btn btn-outline">See how it works →</span>
        </a>
        <a href="play.html" class="fork-card green">
          <span class="tag">SportVot Play</span>
          <h3>I want to play, host an event — and get it live streamed.</h3>
          <p class="audience">Players · Teams · Corporate Events</p>
          <p class="body">Book a streaming-enabled turf in Mumbai or Delhi NCR. Every game is live-streamed. Every player walks away with a highlight reel.</p>
          <span class="btn btn-outline">Explore SportVot Play →</span>
        </a>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Scale &amp; Trust</p>
        <h2>The numbers speak for themselves.</h2>
        <p>Trusted by clubs, federations, and leagues across 32+ countries, from grassroots tournaments to national championships.</p>
      </div>
      <div class="stats-grid" style="margin-top:56px;" data-reveal-scale>
        <div class="stat"><b data-count="600000" data-suffix="+">0</b><span>Games Produced</span></div>
        <div class="stat"><b data-count="52" data-suffix="+">0</b><span>Sports</span></div>
        <div class="stat"><b data-count="32" data-suffix="+">0</b><span>Countries Covered</span></div>
        <div class="stat"><b data-count="75" data-suffix="+">0</b><span>Federations &amp; Associations</span></div>
        <div class="stat"><b data-count="100" data-suffix="Mn+">0</b><span>Digital Viewership</span></div>
      </div>

      <div style="margin-top:88px;">
        <h3 class="text-center" style="font-size:22px;color:var(--sv-text-muted);font-weight:700;" data-reveal>What our clients say.</h3>
        <div class="testimonial-grid" style="margin-top:32px;" data-reveal-group>
          <div class="testimonial-card">
            <p class="quote">SportVot turned our weekend league into a broadcast product our sponsors actually wanted to pay for.</p>
            <div class="person"><span class="avatar">AR</span><span><b>Anita Rao</b><span>Tournament Director, District Football League</span></span></div>
          </div>
          <div class="testimonial-card">
            <p class="quote">Live in under five minutes with a single mobile camera — our federation had never streamed a match before this.</p>
            <div class="person"><span class="avatar">JM</span><span><b>James Mwangi</b><span>Secretary General, National Kabaddi Association</span></span></div>
          </div>
          <div class="testimonial-card">
            <p class="quote">The automated highlights alone changed how our academy recruits — every player now has a reel within minutes of full time.</p>
            <div class="person"><span class="avatar">SP</span><span><b>Sana Pillai</b><span>Head Coach, Elite Cricket Academy</span></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="proposal">
    <div class="container">
      <div class="cta-strip" data-reveal-scale>
        <p class="eyebrow" style="justify-content:center;">Get a Proposal</p>
        <h2>Ready to take your sport to the world?</h2>
        <p>Tell us about your tournament, league, or event and we'll put together a production proposal within 24 hours.</p>
      </div>
      <div class="form-card" style="max-width:840px;margin:-40px auto 0;position:relative;z-index:2;" data-reveal>
        <form data-demo-form>
          <div class="form-grid">
            <div class="field"><label>Name *</label><input type="text" required placeholder="Your full name"></div>
            <div class="field"><label>Phone Number *</label><input type="tel" required placeholder="+1 555 000 0000"></div>
            <div class="field"><label>Email ID *</label><input type="email" required placeholder="you@organisation.com"></div>
            <div class="field"><label>Location *</label><input type="text" required placeholder="City, Country"></div>
            <div class="field">
              <label>Sport *</label>
              <select required>
                <option value="">Select a sport</option>
                <option>Multi-sport</option><option>Football / Soccer</option><option>Cricket</option>
                <option>Padel</option><option>Pickleball</option><option>Badminton</option><option>Tennis</option>
                <option>Table Tennis</option><option>Hockey</option><option>Rugby</option><option>Kabaddi</option>
                <option>AFL</option><option>Baseball</option><option>Basketball</option><option>Netball</option>
              </select>
            </div>
            <div class="field">
              <label>Production / Solution Interest *</label>
              <select required>
                <option value="">Select an option</option>
                <option>SportVot End-to-End Live Sports Production Solution</option>
                <option>SportVot Automated Cameras</option>
                <option>SportVot Analytics</option>
                <option>SportVot Highlights</option>
                <option>SportVot OTT</option>
                <option>I don't know / Looking for something else</option>
              </select>
            </div>
            <div class="field full"><label>Description</label><textarea placeholder="Tell us about your event..."></textarea></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block magnetic"><span>Get a Proposal</span></button>
        </form>
      </div>
    </div>
  </section>
"""

FOR_ORGANISATIONS = """
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow" data-reveal>For Organisations</p>
      <h1 data-reveal>Professional Sports Broadcasting — for games at every level.</h1>
    </div>
  </section>

  <section class="section">
    <div class="container two-col">
      <div data-reveal>
        <p class="eyebrow">The Problem</p>
        <h2 style="font-size:clamp(28px,4.5vw,42px);margin-top:16px;">99% of sports have no form of broadcast coverage.</h2>
        <p style="margin-top:20px;color:var(--sv-text-muted);font-size:17px;">Not because the games aren't good enough. Because broadcast was never built for them.</p>
        <p style="margin-top:16px;font-family:var(--font-display);font-weight:800;color:var(--sv-mint);font-size:22px;">SportVot changes that.</p>
      </div>
      <div class="col-media" data-reveal-scale>Real productions.<br>Real matches.</div>
    </div>
  </section>

  <section class="section section-dark pin-section">
    <div class="container">
      <div class="section-head center" style="margin:0 auto 64px;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">How It Works</p>
        <h2>Live in 5 minutes. From any camera.</h2>
        <p>Three steps. One platform. A professional broadcast, every time.</p>
      </div>
      <div class="pin-stage">
        <div class="pin-visual"><span class="num">01</span></div>
        <div class="step-list">
          <div class="step-item active">
            <span class="step-num">STEP 01</span>
            <h3>Capture</h3>
            <p style="color:var(--sv-text-muted);font-size:15px;margin-top:8px;">Compatible with all types of video capturing devices:</p>
            <ul><li>Mobile phone</li><li>Professional video camera</li><li>Automated smart camera</li><li>Up to 15 angles simultaneously</li></ul>
          </div>
          <div class="step-item">
            <span class="step-num">STEP 02</span>
            <h3>Produce</h3>
            <p style="color:var(--sv-text-muted);font-size:15px;margin-top:8px;">Your feed enters SportVot Cloud Studio. The broadcast builds itself:</p>
            <ul><li>Live graphics &amp; animated overlays</li><li>Real-time scoring — 52+ sports</li><li>Remote multi-lingual commentary</li><li>Automated highlights — within seconds</li><li>Sponsor cue integration</li></ul>
          </div>
          <div class="step-item">
            <span class="step-num">STEP 03</span>
            <h3>Distribute</h3>
            <p style="color:var(--sv-text-muted);font-size:15px;margin-top:8px;">One stream. Every platform. Your audience, wherever they are:</p>
            <ul><li>SportVot OTT</li><li>YouTube &amp; Facebook</li><li>Your own website or app</li><li>All simultaneously</li></ul>
          </div>
        </div>
      </div>
      <div class="cta-strip" style="margin-top:64px;padding:44px;" data-reveal>
        <h2 style="font-size:26px;">Want the full technical detail?</h2>
        <p>DRS, virtual advertising, custom graphics, API integrations and more.</p>
        <a href="solutions.html" class="btn btn-primary magnetic"><span>Full Capabilities &amp; Tech Detail →</span></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">SportVot Cloud Studio</p>
        <h2>Everything your broadcast needs.</h2>
        <p>No add-ons. No extra hires. No compromise.</p>
      </div>
      <div class="cap-grid" style="margin-top:48px;" data-reveal-group>
        <div class="cap-card"><div class="stat-line">Up to 15 camera angles</div><h4>Multi-Angle Streaming</h4><p>Mix automated and video cameras in a single production. Switch between angles live.</p></div>
        <div class="cap-card"><div class="stat-line">52+ sports supported</div><h4>Live Scoring &amp; Stats</h4><p>Real-time detailed scoreboards and player data, on screen.</p></div>
        <div class="cap-card"><div class="stat-line">100+ customisable overlays</div><h4>Animated Graphics</h4><p>Your brand. Your colours. Broadcast-quality visuals.</p></div>
        <div class="cap-card"><div class="stat-line">Any language. Any location.</div><h4>Remote Commentary</h4><p>Commentators join from anywhere, mixed live into your feed.</p></div>
        <div class="cap-card"><div class="stat-line">Ready within 5 seconds</div><h4>AI Auto Highlights</h4><p>Every key moment — clipped and shareable before the crowd settles.</p></div>
        <div class="cap-card"><div class="stat-line">Built into every broadcast</div><h4>Ad &amp; Sponsor Integration</h4><p>Pre-roll, mid-roll and post-roll ads, overlays, and virtual on-field advertising.</p></div>
        <div class="cap-card"><div class="stat-line">Less than 5 seconds latency</div><h4>Ultra-Low Latency</h4><p>Your audience watches as it happens — not 30 seconds behind.</p></div>
        <div class="cap-card"><div class="stat-line">Any angle. Any moment.</div><h4>Instant Multi-Angle Replay</h4><p>Replay key moments from every active camera — live.</p></div>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Trusted Globally</p>
        <h2>Who's already using SportVot.</h2>
        <p>From district leagues to international federations — across 30+ countries.</p>
      </div>
      <div class="case-grid" style="margin-top:48px;" data-reveal-group>
        <div class="case-card">
          <div class="thumb">Football · India</div>
          <div class="body"><div class="meta">Client Case Study</div><div class="metric">2.4Mn</div><div class="metric-label">views across a single tournament weekend</div><a href="case-studies.html" class="read">Read case study →</a></div>
        </div>
        <div class="case-card">
          <div class="thumb">Cricket · UAE</div>
          <div class="body"><div class="meta">Client Case Study</div><div class="metric">18</div><div class="metric-label">matches live streamed in 48 hours</div><a href="case-studies.html" class="read">Read case study →</a></div>
        </div>
        <div class="case-card">
          <div class="thumb">Kabaddi · India</div>
          <div class="body"><div class="meta">Client Case Study</div><div class="metric">800+</div><div class="metric-label">player profiles created in one season</div><a href="case-studies.html" class="read">Read case study →</a></div>
        </div>
      </div>
      <div style="margin-top:72px;" data-reveal>
        <h3 class="text-center" style="font-size:22px;color:var(--sv-text-muted);font-weight:700;">And many more organisations across the world —</h3>
        <div class="logo-desc-grid">
          <div class="logo-desc-item"><b>Football</b>&nbsp;· Nigeria · 3 seasons</div>
          <div class="logo-desc-item"><b>Badminton</b>&nbsp;· Indonesia · 40+ events</div>
          <div class="logo-desc-item"><b>Basketball</b>&nbsp;· Kenya · National league</div>
          <div class="logo-desc-item"><b>Cricket</b>&nbsp;· India · 5 seasons</div>
          <div class="logo-desc-item"><b>Hockey</b>&nbsp;· UK · Club level</div>
          <div class="logo-desc-item"><b>Volleyball</b>&nbsp;· Philippines · 2 leagues</div>
        </div>
        <p class="text-center" style="margin-top:32px;"><a href="case-studies.html" class="btn btn-outline magnetic"><span>View All Case Studies →</span></a></p>
      </div>
    </div>
  </section>

  <section class="section" id="proposal">
    <div class="container two-col">
      <div data-reveal>
        <p class="eyebrow">Get a Proposal</p>
        <h2 style="font-size:clamp(28px,4.5vw,42px);margin-top:16px;">Ready to take your sport to the world?</h2>
        <p style="margin-top:16px;color:var(--sv-text-muted);font-size:17px;">No fixed packages. No pricing pressure. Just a plan built around your event — within 24 hours.</p>
        <ul class="trust-list">
          <li>We respond to every enquiry within 24 hours</li>
          <li>Every proposal is custom — built for your sport &amp; scale</li>
          <li>Trusted by organisations across 30+ countries</li>
          <li>Your details are never shared with third parties</li>
        </ul>
      </div>
      <div class="form-card" data-reveal>
        <form data-demo-form>
          <div class="field"><label>Your Name *</label><input type="text" required placeholder="Full name"></div>
          <div class="field"><label>Organisation *</label><input type="text" required placeholder="Club, federation or academy"></div>
          <div class="form-grid">
            <div class="field"><label>City &amp; Country *</label><input type="text" required placeholder="Dubai, UAE"></div>
            <div class="field"><label>Phone Number *</label><input type="tel" required placeholder="Include country code"></div>
          </div>
          <div class="field"><label>Email Address *</label><input type="email" required placeholder="you@organisation.com"></div>
          <div class="field">
            <label>Services</label>
            <select>
              <option value="">Select a service</option>
              <option>Live streaming &amp; production</option>
              <option>Post-production &amp; highlights</option>
              <option>Player profiling &amp; analytics</option>
              <option>Multi-platform distribution</option>
              <option>Sponsor &amp; ad integration</option>
              <option>Commentary services</option>
              <option>Full-season production partnership</option>
              <option>Not sure — I need a consultation</option>
            </select>
          </div>
          <div class="field"><label>Message</label><textarea placeholder="Sport, number of matches, location, dates — anything that helps us understand your event."></textarea></div>
          <p class="consent">By submitting you agree to SportVot's Privacy Policy.</p>
          <button type="submit" class="btn btn-primary btn-block magnetic"><span>Send Enquiry →</span></button>
        </form>
      </div>
    </div>
  </section>
"""

SOLUTIONS = """
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow" data-reveal>Solutions &amp; Technical Detail</p>
      <h1 data-reveal>Broadcast infrastructure, built for every sport and scale.</h1>
      <p data-reveal>DRS &amp; ball tracking, virtual advertising, custom graphics specs, and API integrations — the full SportVot Cloud Studio stack.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Versatile Production Solutions</p>
        <h2>Capture with whatever's on hand.</h2>
      </div>
      <div class="play-grid" style="margin-top:48px;" data-reveal-group>
        <div class="play-card"><div class="icon">📷</div><h3>Automated Cameras</h3><p>Hands-free coverage that tracks the action across the field — no cameraperson required.</p><a href="for-organisations.html#proposal" class="btn btn-outline btn-sm magnetic" style="margin-top:20px;"><span>Get a Quote</span></a></div>
        <div class="play-card"><div class="icon">📱</div><h3>Mobile Cameras</h3><p>Quick setup and streaming from a phone — live in minutes, anywhere there's a connection.</p><a href="for-organisations.html#proposal" class="btn btn-outline btn-sm magnetic" style="margin-top:20px;"><span>Get a Quote</span></a></div>
        <div class="play-card"><div class="icon">🎥</div><h3>Video Cameras</h3><p>Professional-grade broadcasting for federations and leagues that need the highest production value.</p><a href="for-organisations.html#proposal" class="btn btn-outline btn-sm magnetic" style="margin-top:20px;"><span>Get a Quote</span></a></div>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Enhance Your Pre-Captured Content</p>
        <h2>Already have footage? We'll make it work harder.</h2>
      </div>
      <div class="cap-grid" style="margin-top:48px;" data-reveal-group>
        <div class="cap-card"><h4>Custom Highlights</h4><p>Player, team, or full-tournament level highlight reels — cut and branded to spec.</p></div>
        <div class="cap-card"><h4>Player Tagging</h4><p>Every key moment tagged to the athlete who made it, ready for individual reels.</p></div>
        <div class="cap-card"><h4>Social Optimisation</h4><p>Reels, Shorts, and Stories formats, cut and captioned for every platform.</p></div>
        <div class="cap-card"><h4>Branded Content</h4><p>Sponsor-aligned edits that keep your partners visible in every clip.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Technical Detail</p>
        <h2>For teams who want the specs.</h2>
      </div>
      <div class="cap-grid" style="margin-top:48px;" data-reveal-group>
        <div class="cap-card"><div class="stat-line">DRS &amp; Ball Tracking</div><h4>Decision review, made accessible</h4><p>Multi-angle review tooling for grassroots and semi-pro tournaments previously priced out of DRS.</p></div>
        <div class="cap-card"><div class="stat-line">Virtual Advertising</div><h4>On-field ads, broadcast-only</h4><p>Insert sponsor boards and pitch-side branding digitally — visible only on the stream.</p></div>
        <div class="cap-card"><div class="stat-line">Custom Graphics</div><h4>Your scoreboard, your brand</h4><p>Fully theme-able overlays matched to your team, league, or federation identity.</p></div>
        <div class="cap-card"><div class="stat-line">Open API</div><h4>Integrate with what you already run</h4><p>Push scores, stats and stream metadata into your own website, app, or scoreboard hardware.</p></div>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="cta-strip" data-reveal-scale>
        <p class="eyebrow" style="justify-content:center;">Talk to the team</p>
        <h2>Have a spec sheet to compare us against?</h2>
        <p>Send it over — most technical questions get a direct answer within one business day.</p>
        <a href="for-organisations.html#proposal" class="btn btn-primary magnetic"><span>Get a Proposal</span></a>
      </div>
    </div>
  </section>
"""

PLAY = """
  <section class="page-hero" style="background: radial-gradient(90% 90% at 85% 0%, rgba(141,229,219,.24), transparent 50%);">
    <div class="container">
      <p class="eyebrow" data-reveal>SportVot Play — The Future of Casual Sports</p>
      <h1 data-reveal>Play with passion. Get it live-streamed.</h1>
      <p data-reveal>Book a streaming-enabled turf in Mumbai or Delhi NCR. Join an open match, or host a fully managed corporate sports event. Every game is live-streamed. Every player walks away with a highlight reel.</p>
      <div class="hero-ctas" data-reveal>
        <a href="contact.html" class="btn btn-primary magnetic"><span>Book a Turf</span></a>
        <a href="live-tv.html" class="btn btn-outline magnetic"><span>▶ Watch Play Highlights</span></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="play-grid" data-reveal-group>
        <div class="play-card"><div class="icon">🏆</div><h3>Play With Passion</h3><p>Experience thrilling gameplay on premium turfs designed for maximum fun.</p></div>
        <div class="play-card"><div class="icon">🎥</div><h3>Stream Every Moment</h3><p>Watch yourself in action — get your games live-streamed and recorded for future playback.</p></div>
        <div class="play-card"><div class="icon">🤝</div><h3>Play Together, Play Smart</h3><p>Join a community of fellow players, connect, and enjoy the game in good company.</p></div>
        <div class="play-card"><div class="icon">📊</div><h3>More Than Just Play</h3><p>Connect, track, and share every match in a fun, interactive way with personalised player cards.</p></div>
        <div class="play-card"><div class="icon">📍</div><h3>Mumbai &amp; Delhi NCR</h3><p>Streaming-enabled turfs across both cities, with more markets opening soon.</p></div>
        <div class="play-card"><div class="icon">🏢</div><h3>Corporate Events</h3><p>Fully managed corporate sports days — book the venue, we handle production and highlights.</p></div>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container two-col reverse">
      <div class="col-media" data-reveal-scale>Your match.<br>Your highlight reel.</div>
      <div data-reveal>
        <p class="eyebrow">How SportVot Play Works</p>
        <h2 style="font-size:clamp(28px,4.5vw,40px);margin-top:16px;">From kickoff to highlight reel, in one booking.</h2>
        <ul class="list-check">
          <li>Book a streaming-enabled turf online in under two minutes</li>
          <li>Every match is captured with SportVot's automated multi-camera rig</li>
          <li>Walk away with a personalised player card and match highlight reel</li>
          <li>Share instantly to social — no editing required</li>
        </ul>
        <a href="contact.html" class="btn btn-primary magnetic" style="margin-top:32px;"><span>Book Your Slot →</span></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-strip" data-reveal-scale>
        <p class="eyebrow" style="justify-content:center;">Corporate &amp; Community Events</p>
        <h2>Hosting a tournament, office league, or fan day?</h2>
        <p>We manage the turf, the production, and the highlight delivery — you just show up and play.</p>
        <a href="contact.html" class="btn btn-primary magnetic"><span>Talk to Our Events Team</span></a>
      </div>
    </div>
  </section>
"""

ABOUT = """
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow" data-reveal>About SportVot</p>
      <h1 data-reveal>Bringing unseen sports talent to the world stage.</h1>
      <p data-reveal>SportVot is a global Sports Tech startup with a cutting-edge live video production and streaming platform designed to empower sports talent at every tier by giving them a stage to showcase their skills.</p>
    </div>
  </section>

  <section class="section">
    <div class="container two-col">
      <div data-reveal>
        <p class="eyebrow">Our Mission</p>
        <h2 style="font-size:clamp(28px,4.5vw,40px);margin-top:16px;">To bring unseen sports talent to the world stage.</h2>
        <p style="margin-top:20px;color:var(--sv-text-muted);font-size:17px;">By transforming the way grassroots sports are captured and broadcasted, SportVot fosters both athletic growth and community engagement — aiming to be the leader in digital sports production.</p>
      </div>
      <div class="col-media" data-reveal-scale>Grassroots to global.</div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Core Offerings</p>
        <h2>Three products. One mission.</h2>
      </div>
      <div class="play-grid" style="margin-top:48px;" data-reveal-group>
        <div class="play-card"><div class="icon">☁️</div><h3>SportVot Cloud Studio</h3><p>Top-quality live sports production with multi-angle streaming, detailed scoring for 30+ sports, custom graphics, automated highlights, and integrated advertising.</p></div>
        <div class="play-card"><div class="icon">⚽</div><h3>SportVot Play</h3><p>World-class facilities for pay-and-play sports, with digital experiences like personalised player cards and match highlights.</p></div>
        <div class="play-card"><div class="icon">📺</div><h3>SportVot OTT</h3><p>A multi-sports streaming platform bringing grassroots talent to the limelight across 15+ sports.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" style="margin:0 auto;" data-reveal>
        <p class="eyebrow" style="justify-content:center;">Leadership</p>
        <h2>About Our Founders</h2>
      </div>
      <div class="team-grid" style="margin-top:48px;" data-reveal-group>
        <div class="team-card"><span class="avatar">SA</span><h3>Siddhant Agarwal</h3><p class="role">CEO</p><p>Tech expert with 12+ years of experience building software technology products.</p></div>
        <div class="team-card"><span class="avatar">YB</span><h3>Yash Bhagwatkar</h3><p class="role">COO</p><p>Management expert with 5+ years of experience spearheading operations across India.</p></div>
        <div class="team-card"><span class="avatar">SG</span><h3>Shubhangi Gupta</h3><p class="role">CMO</p><p>Digital marketing expert with experience handling 40+ brands.</p></div>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="cta-strip" data-reveal-scale>
        <h2>Want to build the future of grassroots sports with us?</h2>
        <p>We're always looking for people who care about giving athletes a stage.</p>
        <a href="contact.html" class="btn btn-primary magnetic"><span>Get in Touch</span></a>
      </div>
    </div>
  </section>
"""

NEWS_ITEMS = [
    ("Partnerships", "Aug 2026", "SportVot signs 12 new federation partnerships across Africa"),
    ("Product", "Jul 2026", "Automated highlights now generate in under 5 seconds"),
    ("Community", "Jun 2026", "Breaking Sports with Vivek Sethia hits Episode 35"),
    ("Product", "May 2026", "SportVot Play expands to Delhi NCR with 8 new turfs"),
    ("Events", "Apr 2026", "Premier League Kabaddi 2026 goes live exclusively on SportVot OTT"),
    ("Company", "Mar 2026", "SportVot crosses 600,000 games produced worldwide"),
]
NEWS_CARDS = "".join([f"""<div class="case-card"><div class="thumb">{tag}</div><div class="body"><div class="meta">{date}</div><h4 style="margin-top:8px;font-size:17px;">{title}</h4><a href="#" class="read">Read more →</a></div></div>""" for tag, date, title in NEWS_ITEMS])

NEWS = f"""
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow" data-reveal>News &amp; Stories</p>
      <h1 data-reveal>What's happening at SportVot.</h1>
      <p data-reveal>Product updates, partnership announcements, and stories from the grassroots tournaments we produce every week.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="case-grid" data-reveal-group>
        {NEWS_CARDS}
      </div>
    </div>
  </section>
"""

CASE_ITEMS = [
    ("Football · India","2.4Mn","views across a single tournament weekend"),
    ("Cricket · UAE","18","matches live streamed in 48 hours"),
    ("Kabaddi · India","800+","player profiles created in one season"),
    ("Football · Nigeria","3","seasons produced end-to-end"),
    ("Badminton · Indonesia","40+","events streamed nationwide"),
    ("Basketball · Kenya","1","national league, fully digitised"),
]
CASE_CARDS = "".join([f"""<div class="case-card"><div class="thumb">{tag}</div><div class="body"><div class="meta">Case Study</div><div class="metric">{metric}</div><div class="metric-label">{label}</div><a href="#" class="read">Read case study →</a></div></div>""" for tag, metric, label in CASE_ITEMS])

CASE_STUDIES = f"""
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow" data-reveal>Case Studies</p>
      <h1 data-reveal>Real organisations. Real broadcast results.</h1>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="case-grid" data-reveal-group>
        {CASE_CARDS}
      </div>
    </div>
  </section>
"""

CONTACT = """
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow" data-reveal>Contact Us</p>
      <h1 data-reveal>Let's talk about your next broadcast.</h1>
      <p data-reveal>Whether it's a single match or a full season partnership, our team replies within 24 hours.</p>
    </div>
  </section>
  <section class="section">
    <div class="container two-col">
      <div data-reveal>
        <ul class="trust-list">
          <li>We respond to every enquiry within 24 hours</li>
          <li>Every proposal is custom — built for your sport &amp; scale</li>
          <li>Trusted by organisations across 30+ countries</li>
          <li>Your details are never shared with third parties</li>
        </ul>
        <div style="margin-top:40px;">
          <p class="eyebrow">Reach Us Directly</p>
          <p style="margin-top:12px;color:var(--sv-text-muted);">hello@sportvot.ai<br>+1 (000) 000-0000</p>
        </div>
      </div>
      <div class="form-card" data-reveal>
        <form data-demo-form>
          <div class="field"><label>Your Name *</label><input type="text" required placeholder="Full name"></div>
          <div class="field"><label>Email Address *</label><input type="email" required placeholder="you@organisation.com"></div>
          <div class="field"><label>Phone Number *</label><input type="tel" required placeholder="Include country code"></div>
          <div class="field"><label>Message *</label><textarea required placeholder="How can we help?"></textarea></div>
          <p class="consent">By submitting you agree to SportVot's Privacy Policy.</p>
          <button type="submit" class="btn btn-primary btn-block magnetic"><span>Send Message →</span></button>
        </form>
      </div>
    </div>
  </section>
"""

def match_card(sport, title, dur=None, live=False):
    dur_html = f'<span class="dur">{dur}</span>' if dur else ''
    live_html = '<span class="live-tag nav-live" style="position:absolute;">LIVE</span>' if live else ''
    return f"""<div class="match-card"><div class="match-thumb">{live_html}<span class="play-ico">▶</span>{dur_html}</div><div class="body"><div class="sport">{sport}</div><div class="title">{title}</div></div></div>"""

LIVE_TV_MATCHES = "".join([
    match_card("Cricket", "GSL Frankfurt | Match 4 | FC Alsbach vs MSC Frankfurt", "8:41", live=True),
    match_card("Kabaddi", "Mumbai Kabaddi Masters | Semi Final 2 | Ambika SC vs Jolly KM", "10:38", live=True),
    match_card("Football", "Club Friendlies 2026 | Real Betis vs Olympique Lyon", "5:48"),
    match_card("Basketball", "NSU Summer Heat Clash | ICS vs MTG", "1:54"),
    match_card("Kabaddi", "Premier League Kabaddi 2026 | Glasgow Unicorns vs Wolverhampton", "6:03"),
    match_card("Cricket", "Century Champions League Brisbane | Grand Final | Rockets vs Marlins", "9:45"),
    match_card("Football", "Assam Youth League U17 | Bodoland FC vs Eleven Stars", "5:23"),
    match_card("Boxing", "BFL Street V 2026 | Fight Night Highlights", "3:11"),
])

LIVE_TV = f"""
  <section class="page-hero" style="background: radial-gradient(90% 90% at 50% 0%, rgba(255,0,67,.18), transparent 50%);">
    <div class="container">
      <span class="nav-live" style="margin-bottom:16px;" data-reveal>● Live Now</span>
      <h1 data-reveal>SportVot OTT — every sport, every level, live.</h1>
      <p data-reveal>Grassroots to national championships across 15+ sports — live matches, full replays, and highlight reels updated daily on SportVot's streaming platform.</p>
      <div class="hero-ctas" data-reveal>
        <a href="https://sportvot.com/tv" target="_blank" rel="noopener" class="btn btn-live magnetic"><span>▶ Watch on SportVot OTT</span></a>
        <a href="for-organisations.html#proposal" class="btn btn-outline magnetic"><span>Stream Your Own Tournament</span></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <p class="eyebrow">Trending Events</p>
        <h2 style="font-size:30px;">Nail-biting events, live right now.</h2>
      </div>
      <div class="match-grid" style="margin-top:40px;" data-reveal-group>
        {LIVE_TV_MATCHES}
      </div>
      <p class="text-center" style="margin-top:48px;">
        <a href="https://sportvot.com/tv" target="_blank" rel="noopener" class="btn btn-primary magnetic"><span>See Everything Live on SportVot OTT →</span></a>
      </p>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="tag-row" style="justify-content:center;" data-reveal>
        <span class="tag">Cricket</span><span class="tag">Football</span><span class="tag">Kabaddi</span>
        <span class="tag">Basketball</span><span class="tag">Badminton</span><span class="tag">Boxing</span>
        <span class="tag">Tennis</span><span class="tag">Padel</span><span class="tag">Rugby</span><span class="tag">+15 more sports</span>
      </div>
    </div>
  </section>
"""

PAGES = {
    "index.html": ("SportVot — Every Game. Every Moment. LIVE.",
                    "SportVot helps clubs, academies, leagues, and federations take their games live in 5 minutes — from any camera. Professional sports production for 52+ sports across the world.",
                    HOME),
    "for-organisations.html": ("Live Stream Your Sports Tournaments | SportVot for Organisations",
                    "SportVot helps clubs, academies, leagues, and federations take their games live in 5 minutes — from any camera. Professional sports production for 50+ sports across the world.",
                    FOR_ORGANISATIONS),
    "solutions.html": ("Solutions & Technical Capabilities | SportVot",
                    "DRS, virtual advertising, custom graphics, and API integrations — explore the full SportVot Cloud Studio technical stack.",
                    SOLUTIONS),
    "play.html": ("SportVot Play — Book a Streaming-Enabled Turf",
                    "Book a streaming-enabled turf in Mumbai or Delhi NCR, join an open match, or host a corporate sports event.",
                    PLAY),
    "about.html": ("About Us | SportVot",
                    "SportVot is a global sports tech startup building live production and streaming tools to bring grassroots sports talent to the world stage.",
                    ABOUT),
    "news.html": ("News | SportVot",
                    "Product updates, partnership announcements, and stories from SportVot's global sports production network.",
                    NEWS),
    "case-studies.html": ("Case Studies | SportVot",
                    "Real organisations, real broadcast results — explore how clubs and federations use SportVot to go live.",
                    CASE_STUDIES),
    "contact.html": ("Contact Us | SportVot",
                    "Get in touch with the SportVot team — we respond to every enquiry within 24 hours.",
                    CONTACT),
    "live-tv.html": ("SportVot OTT — Watch Live Sports",
                    "Watch live matches, replays, and highlights across 15+ sports on SportVot OTT, SportVot's multi-sport streaming platform.",
                    LIVE_TV),
}
