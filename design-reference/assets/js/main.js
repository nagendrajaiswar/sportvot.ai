document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  /* ---------- Active nav link ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  /* ---------- Marquee duplication ---------- */
  document.querySelectorAll('.marquee').forEach(m => { m.innerHTML += m.innerHTML; });

  /* ---------- Hero entrance (headline lines, sub, ctas) ---------- */
  const heroLines = document.querySelectorAll('.hero h1 .line');
  if (heroLines.length) {
    gsap.set(heroLines, { yPercent: 110 });
    gsap.timeline({ delay: .2 })
      .to(heroLines, { yPercent: 0, duration: 1.1, stagger: .12, ease: 'power4.out' })
      .from('.hero-sub', { opacity: 0, y: 24, duration: .8, ease: 'power3.out' }, '-=.6')
      .from('.pipeline', { opacity: 0, y: 16, duration: .7, ease: 'power3.out' }, '-=.5')
      .from('.hero-ctas .btn', { opacity: 0, y: 16, duration: .6, stagger: .1, ease: 'power3.out' }, '-=.4')
      .from('.scroll-cue', { opacity: 0, duration: .6 }, '-=.3');
  }

  /* Hero video parallax + fade on scroll */
  if (document.querySelector('.hero')) {
    gsap.to('.hero-video', {
      yPercent: 18, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- Generic scroll reveals ---------- */
  gsap.utils.toArray('[data-reveal], [data-reveal-scale]').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('is-visible'),
      once: true
    });
  });

  /* Stagger children with [data-reveal-group] */
  document.querySelectorAll('[data-reveal-group]').forEach(group => {
    const items = group.children;
    gsap.set(items, { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: group,
      start: 'top 82%',
      once: true,
      onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: 'power3.out' })
    });
  });

  /* ---------- Animated stat counters ---------- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target, duration: 1.8, ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.floor(obj.val).toLocaleString() + suffix; }
        });
      }
    });
  });

  /* ---------- Pinned step walkthrough ---------- */
  document.querySelectorAll('.pin-section').forEach(section => {
    const items = section.querySelectorAll('.step-item');
    const numEl = section.querySelector('.pin-visual .num');
    items.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i)
      });
    });
    function setActive(i) {
      items.forEach((it, idx) => it.classList.toggle('active', idx === i));
      if (numEl) gsap.to(numEl, { textContent: String(i + 1).padStart(2, '0'), duration: .3, snap: { textContent: 1 } });
      if (numEl) numEl.textContent = String(i + 1).padStart(2, '0');
    }
  });

  /* ---------- Magnetic buttons (desktop only) ---------- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * .3, y: y * .4, duration: .4, ease: 'power3.out' });
      });
      btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.4)' }));
    });

    /* Custom cursor dot */
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    window.addEventListener('mousemove', (e) => {
      gsap.to(dot, { left: e.clientX, top: e.clientY, duration: .15, ease: 'power2.out' });
    });
    document.querySelectorAll('a, button, .btn').forEach(el => {
      el.addEventListener('mouseenter', () => dot.classList.add('grow'));
      el.addEventListener('mouseleave', () => dot.classList.remove('grow'));
    });
  }

  /* ---------- Card hover tilt (match cards, cap cards) ---------- */
  document.querySelectorAll('.match-card, .cap-card, .testimonial-card, .fork-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      gsap.to(card, { rotateX: py * -4, rotateY: px * 4, duration: .4, ease: 'power2.out', transformPerspective: 800 });
    });
    card.addEventListener('mouseleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: .6, ease: 'power3.out' }));
  });

  /* ---------- Header background on scroll ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => header.style.boxShadow = self.progress > 0 || window.scrollY > 80 ? '0 10px 40px rgba(0,0,0,.35)' : 'none'
    });
  }

  /* ---------- Demo form handling ---------- */
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<span>Sent — we’ll be in touch →</span>';
        btn.disabled = true;
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; form.reset(); }, 2600);
      }
    });
  });
});
