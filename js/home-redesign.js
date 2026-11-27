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

  function clearUglyHash() {
    var hash = location.hash;
    if (!hash || (hash !== '#top' && hash !== '#')) return;
    if (history.replaceState) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  // Same-document #top (bookmark, old links) must not stick in the address bar.
  window.addEventListener('hashchange', clearUglyHash);
  clearUglyHash();

  function scrollHomeClean() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    if (location.hash && history.replaceState) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  function isHomePath() {
    var path = location.pathname || '/';
    return path === '/' || path === '/index.html';
  }

  function initHomeLinks() {
    document.querySelectorAll('[data-hr-home]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (!isHomePath()) return;
        e.preventDefault();
        scrollHomeClean();
      });
    });
  }

  function initLangSwitcher() {
    if (typeof I18N === 'undefined' || !I18N.langSwitcherMarkup) return;
    var markup = I18N.langSwitcherMarkup();
    ['hr-lang-switch', 'hr-lang-switch-mobile'].forEach(function (id) {
      var mount = document.getElementById(id);
      if (mount) mount.innerHTML = markup;
    });
    I18N.bindLangSwitcher(document);
  }

  function initNav() {
    var nav = document.getElementById('hr-nav');
    var hamburger = document.getElementById('hr-hamburger');
    var mobile = document.getElementById('hr-mobile-menu');
    var links = document.querySelectorAll('[data-hr-nav]');

    clearUglyHash();
    initHomeLinks();
    initLangSwitcher();

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
        document.querySelectorAll('[data-hr-nav][data-hr-home]').forEach(function (l) {
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
      var img = '';
      if (proj.image) {
        var src640 = proj.image640 || '';
        var srcset = src640
          ? ' srcset="' + escapeHtml(src640) + ' 640w, ' + escapeHtml(proj.image) + ' 1440w"'
          : '';
        var sizes = src640
          ? ' sizes="(max-width: 719px) 100vw, (max-width: 1180px) 46vw, 560px"'
          : '';
        img = '<img src="' + escapeHtml(src640 || proj.image) + '"' + srcset + sizes +
          ' alt="Preview of ' + escapeHtml(proj.title) + '" loading="lazy" decoding="async" width="640" height="400">';
      }
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

  function renderCerts() {
    var mount = document.getElementById('hr-certs');
    if (!mount || typeof certifications === 'undefined') return;

    // Strongest existing SEO credentials for the homepage (real data/links only).
    var homeCertIds = ['cert-019', 'cert-010', 'cert-017'];
    var byId = {};
    certifications.forEach(function (cert) { byId[cert.id] = cert; });
    var featured = homeCertIds.map(function (id) { return byId[id]; }).filter(Boolean);
    if (featured.length < 3) {
      featured = certifications.slice(0, 3);
    }
    mount.innerHTML = featured.map(function (cert) {
      var verify = cert.verificationUrl
        ? '<a href="' + escapeHtml(cert.verificationUrl) + '" target="_blank" rel="noopener noreferrer">Verify certificate</a>'
        : '';
      var img = cert.image
        ? '<img src="' + escapeHtml(cert.image) + '" alt="' + escapeHtml(cert.title) + ' certificate" loading="lazy" decoding="async" width="480" height="300">'
        : '';
      return (
        '<article class="hr-cert">' +
          img +
          '<h3>' + escapeHtml(cert.title) + '</h3>' +
          '<p>' + escapeHtml(cert.issuer || cert.platform || '') + (cert.date ? ' · ' + escapeHtml(cert.date) : '') + '</p>' +
          verify +
        '</article>'
      );
    }).join('');
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
    if (!btn || btn.getAttribute('data-hr-back-bound') === '1') return;
    btn.setAttribute('data-hr-back-bound', '1');
    btn.addEventListener('click', function () {
      scrollHomeClean();
    });
    function onScroll() {
      btn.classList.toggle('is-visible', window.scrollY > 480);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  ready(function () {
    renderProjects();
    renderCerts();
    renderExperience();
    initNav();
    initProgress();
    initReveal();
    initBackTop();
  });
})();
