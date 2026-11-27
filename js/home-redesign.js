/* Homepage redesign interactions — design layer only */
(function () {
  'use strict';

  if (!document.body.classList.contains('home-redesign')) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function initNav() {
    var nav = document.getElementById('hr-nav');
    var hamburger = document.getElementById('hr-hamburger');
    var mobile = document.getElementById('hr-mobile-menu');
    var themeBtn = document.getElementById('hr-theme-toggle');
    var links = document.querySelectorAll('[data-hr-nav]');

    function onScroll() {
      if (!nav) return;
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (hamburger && mobile) {
      hamburger.addEventListener('click', function () {
        var open = mobile.classList.toggle('is-open');
        hamburger.classList.toggle('is-open', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mobile.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobile.classList.remove('is-open');
          hamburger.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var root = document.documentElement;
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
      });
    }

    var sections = [];
    links.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href.charAt(0) === '#') {
        var el = document.querySelector(href);
        if (el) sections.push({ id: href.slice(1), el: el, link: link });
      }
    });

    function setActive() {
      var y = window.scrollY + 120;
      var current = null;
      sections.forEach(function (s) {
        if (s.el.offsetTop <= y) current = s;
      });
      links.forEach(function (l) { l.classList.remove('is-active'); });
      if (current) {
        document.querySelectorAll('[data-hr-nav][href="#' + current.id + '"]').forEach(function (l) {
          l.classList.add('is-active');
        });
      } else {
        document.querySelectorAll('[data-hr-nav][href="#top"]').forEach(function (l) {
          l.classList.add('is-active');
        });
      }
    }
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  function initProgress() {
    var bar = document.getElementById('hr-progress');
    if (!bar) return;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var p = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = p + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initReveal() {
    var nodes = document.querySelectorAll('.hr-reveal');
    if (!nodes.length) return;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function initSculpture() {
    var sculpture = document.getElementById('hr-sculpture');
    if (!sculpture || prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    var mx = 0;
    var my = 0;
    var cx = 0;
    var cy = 0;

    window.addEventListener('pointermove', function (e) {
      var rect = sculpture.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      mx = px * 16;
      my = py * -12;
    }, { passive: true });

    function tick() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      sculpture.style.transform = 'rotateY(' + cx + 'deg) rotateX(' + cy + 'deg)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initParticles() {
    var canvas = document.getElementById('hr-particles');
    if (!canvas || prefersReducedMotion) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var particles = [];
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var running = true;

    function resize() {
      var parent = canvas.parentElement;
      if (!parent) return;
      var w = parent.clientWidth;
      var h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = [];
      var count = Math.min(36, Math.floor((w * h) / 14000));
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          a: Math.random() * 0.5 + 0.2
        });
      }
    }

    function frame() {
      if (!running) return;
      var w = canvas.clientWidth;
      var h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(73, 217, 255,' + p.a + ')';
        ctx.fill();
      });
      requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(frame);
    });
    requestAnimationFrame(frame);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderProjects() {
    var mount = document.getElementById('hr-projects');
    if (!mount || typeof projects === 'undefined') return;

    var featured = projects.filter(function (p) { return p.featured; });
    mount.innerHTML = featured.map(function (proj) {
      var tags = (proj.technologies || []).slice(0, 5).map(function (t) {
        return '<span>' + escapeHtml(t) + '</span>';
      }).join('');
      var live = proj.url
        ? '<a class="hr-btn hr-btn-primary hr-btn-sm" href="' + escapeHtml(proj.url) + '" target="_blank" rel="noopener noreferrer">Live site <span class="hr-arrow" aria-hidden="true">→</span></a>'
        : '';
      var caseStudy = '<a class="hr-btn hr-btn-ghost hr-btn-sm" href="/projects/' + escapeHtml(proj.slug) + '/">Case study</a>';
      var img = proj.image
        ? '<img src="' + escapeHtml(proj.image) + '" alt="Preview of ' + escapeHtml(proj.title) + '" loading="lazy" decoding="async" width="1000" height="625">'
        : '';
      return (
        '<article class="hr-project hr-reveal">' +
          '<div class="hr-project-media">' + img + '</div>' +
          '<div class="hr-project-body">' +
            '<div class="hr-project-meta">Project ' + escapeHtml(proj.number || '') + ' · ' + escapeHtml(proj.role || 'Web') + '</div>' +
            '<h3>' + escapeHtml(proj.title) + '</h3>' +
            '<p>' + escapeHtml(proj.description) + '</p>' +
            '<div class="hr-tags">' + tags + '</div>' +
            '<div class="hr-project-links">' + live + caseStudy + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function renderAgodevMinis() {
    var mount = document.getElementById('hr-agodev-projects');
    if (!mount || typeof projects === 'undefined') return;
    var picks = projects.filter(function (p) { return p.featured; }).slice(0, 3);
    mount.innerHTML = picks.map(function (proj) {
      var href = proj.url || ('/projects/' + proj.slug + '/');
      return (
        '<a class="hr-agodev-mini" href="' + escapeHtml(href) + '"' + (proj.url ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
          (proj.image ? '<img src="' + escapeHtml(proj.image) + '" alt="" loading="lazy" decoding="async" width="640" height="400">' : '') +
          '<span>' + escapeHtml(proj.title) + '</span>' +
        '</a>'
      );
    }).join('');
  }

  function certCategory(cert) {
    var t = ((cert.title || '') + ' ' + (cert.platform || '')).toLowerCase();
    if (/ai search|aeo|ai visibility|artificial intelligence|data analytics and artificial/.test(t)) return 'AI Search';
    if (/technical seo/.test(t)) return 'Technical SEO';
    if (/keyword/.test(t)) return 'Keyword Research';
    if (/seo|semrush|ahrefs|brightlocal|hubspot|kwt|content marketing/.test(t)) return 'SEO';
    return 'Web and Technology';
  }

  function renderCerts() {
    var mount = document.getElementById('hr-certs');
    var filters = document.getElementById('hr-cert-filters');
    if (!mount || typeof certifications === 'undefined') return;

    var cats = ['All', 'SEO', 'Technical SEO', 'AI Search', 'Keyword Research', 'Web and Technology'];
    if (filters) {
      filters.innerHTML = cats.map(function (c, i) {
        return '<button type="button" data-cat="' + escapeHtml(c) + '"' + (i === 0 ? ' class="is-active"' : '') + '>' + escapeHtml(c) + '</button>';
      }).join('');
    }

    mount.innerHTML = certifications.map(function (cert) {
      var cat = certCategory(cert);
      var verify = cert.verificationUrl
        ? '<a href="' + escapeHtml(cert.verificationUrl) + '" target="_blank" rel="noopener noreferrer">Verify certificate</a>'
        : '';
      var img = cert.image
        ? '<img src="' + escapeHtml(cert.image) + '" alt="' + escapeHtml(cert.title) + ' certificate" loading="lazy" decoding="async" width="480" height="300">'
        : '';
      return (
        '<article class="hr-cert" data-cat="' + escapeHtml(cat) + '">' +
          img +
          '<h3>' + escapeHtml(cert.title) + '</h3>' +
          '<p>' + escapeHtml(cert.issuer || cert.platform || '') + (cert.date ? ' · ' + escapeHtml(cert.date) : '') + '</p>' +
          verify +
        '</article>'
      );
    }).join('');

    if (filters) {
      filters.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-cat]');
        if (!btn) return;
        filters.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var cat = btn.getAttribute('data-cat');
        mount.querySelectorAll('.hr-cert').forEach(function (card) {
          var show = cat === 'All' || card.getAttribute('data-cat') === cat;
          card.classList.toggle('is-hidden', !show);
        });
      });
    }
  }

  function renderExperience() {
    var mount = document.getElementById('hr-experience');
    if (!mount || typeof experience === 'undefined') return;

    mount.innerHTML = experience.map(function (exp) {
      var company = exp.company;
      var companyHtml = (typeof profile !== 'undefined' && profile.companyUrl && exp.company === profile.company)
        ? '<a href="' + escapeHtml(profile.companyUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(company) + '</a>'
        : escapeHtml(company);
      var duties = (exp.responsibilities || []).map(function (r) {
        return '<li>' + escapeHtml(r) + '</li>';
      }).join('');
      return (
        '<article class="hr-timeline-item hr-reveal">' +
          '<h3>' + escapeHtml(exp.title) + '</h3>' +
          '<div class="hr-timeline-meta">' + companyHtml + ' · ' + escapeHtml(exp.location || '') + ' · ' + escapeHtml(exp.startDate) + ' – ' + escapeHtml(exp.endDate) + '</div>' +
          '<ul>' + duties + '</ul>' +
        '</article>'
      );
    }).join('');
  }

  function initBackTop() {
    var btn = document.getElementById('hr-back-top');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  ready(function () {
    renderProjects();
    renderAgodevMinis();
    renderCerts();
    renderExperience();
    initNav();
    initProgress();
    initReveal();
    initSculpture();
    initParticles();
    initBackTop();
  });
})();
