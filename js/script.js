/* ============================================
   AGON MUSTAFAJ, Portfolio Scripts
   ============================================ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isMobile = window.innerWidth <= 1024;

  /* --- SVG Icons --- */
  const icons = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
    build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 20V8l7-5 7 5v12"/></svg>',
    optimize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    analyze: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    explore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>'
  };

  function tx(key, fallback) {
    if (typeof t === 'function') {
      var val = t(key);
      if (val) return val;
    }
    return fallback || '';
  }

  /* --- Theme --- */
  function initTheme() {
    const saved = localStorage.getItem('theme');
    const theme = saved || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  }

  /* --- Navbar --- */
  function renderNavbar(activePage) {
    const header = document.getElementById('site-header');
    if (!header) return;

    const links = navLinks.map(function (link) {
      return '<a href="' + link.href + '"' + (link.page === activePage ? ' class="active" aria-current="page"' : '') + '>' + tx('nav.' + link.page, link.label) + '</a>';
    }).join('');

    const mobileLinks = navLinks.map(function (link) {
      return '<a href="' + link.href + '"' + (link.page === activePage ? ' class="active"' : '') + '>' + tx('nav.' + link.page, link.label) + '</a>';
    }).join('');

    var langSwitch = typeof I18N !== 'undefined' ? I18N.langSwitcherMarkup() : '';

    header.innerHTML =
      '<nav class="navbar" role="navigation" aria-label="' + tx('nav.aria', 'Main navigation') + '">' +
        '<div class="container navbar-inner">' +
          '<a href="/" class="nav-logo" aria-label="' + tx('nav.homeAria', 'Agon Mustafaj Home') + '"><span>AM</span></a>' +
          '<div class="nav-links">' + links + '</div>' +
          '<div class="nav-actions">' +
            langSwitch +
            '<button class="theme-toggle" aria-label="' + tx('nav.toggleTheme', 'Toggle theme') + '" title="' + tx('nav.toggleTheme', 'Toggle theme') + '"></button>' +
            '<a href="/cv/" class="btn btn-secondary btn-sm">' + tx('ui.downloadCv', 'Download CV') + '</a>' +
            '<button class="nav-hamburger" aria-label="' + tx('nav.openMenu', 'Open menu') + '" aria-expanded="false">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</nav>' +
      '<div class="mobile-menu" role="navigation" aria-label="' + tx('nav.mobileAria', 'Mobile navigation') + '">' +
        mobileLinks +
        langSwitch +
        '<a href="/cv/" class="btn btn-primary" style="margin-top:1rem">' + tx('ui.downloadCv', 'Download CV') + '</a>' +
      '</div>';

    const themeBtn = header.querySelector('.theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const hamburger = header.querySelector('.nav-hamburger');
    const mobileMenu = header.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    initNavbarScroll();
    if (typeof I18N !== 'undefined') I18N.bindLangSwitcher(header);
  }

  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Footer --- */
  function renderFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const socials = socialLinks.filter(function (s) { return s.active && s.url; }).map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer me" aria-label="' + s.name + '">' + icons[s.icon] + '</a>';
    }).join('');

    footer.innerHTML =
      '<footer class="footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand">' +
              '<h3>' + profile.name + '</h3>' +
              '<p>' + tx('profile.headline', profile.headline) + '</p>' +
              '<p style="margin-top:0.75rem;font-style:italic">' + tx('footer.tagline', 'Building, learning and experimenting with technology.') + '</p>' +
            '</div>' +
            '<div class="footer-links">' +
              '<h4>' + tx('footer.navigation', 'Navigation') + '</h4>' +
              '<a href="/about/">' + tx('nav.about', 'About') + '</a>' +
              '<a href="/projects/">' + tx('nav.projects', 'Projects') + '</a>' +
              '<a href="/services/">' + tx('nav.services', 'Services') + '</a>' +
              '<a href="/skills/">' + tx('nav.skills', 'Skills') + '</a>' +
              '<a href="/contact/">' + tx('nav.contact', 'Contact') + '</a>' +
            '</div>' +
            '<div class="footer-links">' +
              '<h4>' + tx('footer.more', 'More') + '</h4>' +
              '<a href="/experience/">' + tx('nav.experience', 'Experience') + '</a>' +
              '<a href="/education/">' + tx('nav.education', 'Education') + '</a>' +
              '<a href="/certifications/">' + tx('nav.certifications', 'Certifications') + '</a>' +
              '<a href="/blog/">' + tx('nav.blog', 'Blog') + '</a>' +
              '<a href="/cv/">' + tx('footer.resume', 'Resume') + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>&copy; 2026 ' + profile.name + '</span>' +
            '<div class="footer-socials">' + socials + '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  /* --- Custom Cursor --- */
  function initCustomCursor() {
    if (prefersReducedMotion || isTouchDevice || isMobile) return;

    document.body.classList.add('custom-cursor');

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .btn, .skill-node, .browser-mockup, .what-i-do-card').forEach(function (el) {
      el.addEventListener('mouseenter', function () { ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { ring.classList.remove('hover'); });
    });
  }

  /* --- Wallet 3D Interaction --- */
  function initWallet() {
    const wallet = document.querySelector('.wallet-card');
    if (!wallet || isMobile || prefersReducedMotion) return;

    wallet.addEventListener('mousemove', function (e) {
      const rect = wallet.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      wallet.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
      wallet.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
      wallet.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });

    wallet.addEventListener('mouseleave', function () {
      wallet.style.transform = 'rotateX(0) rotateY(0)';
    });
  }

  /* --- Share Modal --- */
  function initShareModal() {
    const shareBtns = document.querySelectorAll('[data-share]');
    if (!shareBtns.length) return;

    let overlay = document.getElementById('share-modal');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'share-modal';
      overlay.className = 'modal-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-label', tx('share.aria', 'Share profile'));
      overlay.innerHTML =
        '<div class="modal">' +
          '<button class="modal-close" aria-label="' + tx('share.close', 'Close') + '">&times;</button>' +
          '<h3>' + tx('share.title', 'Share Profile') + '</h3>' +
          '<div class="modal-actions">' +
            '<button class="btn btn-secondary" data-copy-url>' + tx('share.copy', 'Copy Website URL') + '</button>' +
            '<a href="' + profile.linkedin + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">' + tx('share.linkedin', 'Share on LinkedIn') + '</a>' +
            '<a href="' + profile.facebook + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">' + tx('share.facebook', 'Share on Facebook') + '</a>' +
            '<a href="mailto:?subject=' + encodeURIComponent(tx('share.mailSubject', profile.name + ' Portfolio')) + '&body=' + encodeURIComponent(SITE_URL) + '" class="btn btn-secondary">' + tx('share.email', 'Share via Email') + '</a>' +
          '</div>' +
        '</div>';
      document.body.appendChild(overlay);
    }

    const closeBtn = overlay.querySelector('.modal-close');
    const copyBtn = overlay.querySelector('[data-copy-url]');

    shareBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        overlay.classList.add('open');
      });
    });

    function closeModal() {
      overlay.classList.remove('open');
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(SITE_URL).then(function () {
          showToast(tx('share.copied', 'Link copied!'));
        });
      });
    }
  }

  /* --- Toast --- */
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2500);
  }

  /* --- Scroll Reveal --- */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .timeline-item').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .timeline-item').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Magnetic Buttons --- */
  function initMagneticButtons() {
    if (isMobile || prefersReducedMotion) return;

    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* --- Card Tilt --- */
  function initCardTilt() {
    if (isMobile || prefersReducedMotion) return;

    document.querySelectorAll('.card-tilt').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* --- Terminal Typing --- */
  function initTerminal() {
    const terminal = document.getElementById('terminal-output');
    if (!terminal || prefersReducedMotion) {
      if (terminal) terminal.innerHTML = getTerminalContent();
      return;
    }

    const lines = [
      { prompt: true, text: ' whoami' },
      { output: true, text: profile.name },
      { prompt: true, text: ' focus' },
      { output: true, text: tx('terminal.focus', 'Computer Science\nWeb Development\nSEO\nAI') },
      { prompt: true, text: ' status' },
      { output: true, text: tx('terminal.status', 'Building...\nLearning...\nExperimenting...') }
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentHTML = '';

    function type() {
      if (lineIndex >= lines.length) return;

      const line = lines[lineIndex];

      if (charIndex === 0) {
        if (line.prompt) {
          currentHTML += '<div class="terminal-line"><span class="terminal-prompt">$</span>';
        } else {
          currentHTML += '<div class="terminal-line terminal-output">';
        }
      }

      const text = line.text;
      if (charIndex < text.length) {
        const ch = text[charIndex];
        if (line.prompt) {
          terminal.innerHTML = currentHTML + text.substring(0, charIndex + 1) + '<span class="terminal-cursor"></span></div>';
        } else {
          terminal.innerHTML = currentHTML + text.substring(0, charIndex + 1).replace(/\n/g, '<br>') + '<span class="terminal-cursor"></span></div>';
        }
        charIndex++;
        setTimeout(type, 40 + Math.random() * 30);
      } else {
        if (line.prompt) {
          currentHTML += text + '</div>';
        } else {
          currentHTML += text.replace(/\n/g, '<br>') + '</div>';
        }
        terminal.innerHTML = currentHTML;
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 400);
      }
    }

    type();
  }

  function getTerminalContent() {
    return '<div class="terminal-line"><span class="terminal-prompt">$</span> whoami</div>' +
      '<div class="terminal-line terminal-output">' + profile.name + '</div>' +
      '<div class="terminal-line"><span class="terminal-prompt">$</span> focus</div>' +
      '<div class="terminal-line terminal-output">' + tx('terminal.focus', 'Computer Science\nWeb Development\nSEO\nAI').replace(/\n/g, '<br>') + '</div>' +
      '<div class="terminal-line"><span class="terminal-prompt">$</span> status</div>' +
      '<div class="terminal-line terminal-output">' + tx('terminal.status', 'Building...\nLearning...\nExperimenting...').replace(/\n/g, '<br>') + '</div>';
  }

  /* --- Skills Interaction --- */
  function initSkills() {
    const panel = document.getElementById('skill-detail');
    if (!panel) return;

    const nodes = document.querySelectorAll('.skill-node');
    nodes.forEach(function (node) {
      function showSkill() {
        nodes.forEach(function (n) { n.classList.remove('active'); });
        node.classList.add('active');
        const skillName = node.dataset.skill;
        const skill = skills.find(function (s) { return s.name === skillName; });
        if (!skill) return;

        let projectHTML = '';
        if (skill.project) {
          const proj = projects.find(function (p) { return p.title === skill.project; });
          if (proj) {
            projectHTML = '<div class="skill-project">' + tx('ui.relatedProject', 'Related project:') + ' <a href="/projects/' + proj.slug + '/">' + skill.project + '</a></div>';
          }
        }

        panel.innerHTML =
          '<div class="skill-name">' + skill.name + '</div>' +
          '<div class="skill-cat">' + (tx('skillcat.' + skill.category, skill.category) || skill.category) + '</div>' +
          '<div class="skill-desc">' + (tx('skill.' + skill.name, skill.description) || skill.description) + '</div>' +
          projectHTML;
      }

      node.addEventListener('mouseenter', showSkill);
      node.addEventListener('click', showSkill);
      node.addEventListener('focus', showSkill);
    });

    if (nodes.length) {
      nodes[0].dispatchEvent(new Event('mouseenter'));
    }
  }

  /* --- SEO Flow --- */
  function initSeoFlow() {
    const steps = document.querySelectorAll('.seo-flow-step');
    steps.forEach(function (step) {
      step.addEventListener('click', function () {
        steps.forEach(function (s) { s.classList.remove('active'); });
        step.classList.add('active');
      });
    });
    if (steps.length) steps[0].classList.add('active');
  }

  /* --- Dev Pipeline --- */
  function initDevPipeline() {
    const steps = document.querySelectorAll('.pipeline-step');
    const desc = document.getElementById('pipeline-description');
    if (!steps.length || !desc) return;

    steps.forEach(function (step) {
      step.addEventListener('mouseenter', function () {
        steps.forEach(function (s) { s.classList.remove('active'); });
        step.classList.add('active');
        const stepName = step.dataset.step;
        const pipeline = devPipeline.find(function (p) { return p.step === stepName; });
        if (pipeline) desc.textContent = pipeline.description;
      });
    });

    if (steps.length) steps[0].dispatchEvent(new Event('mouseenter'));
  }

  /* --- Certification Filter --- */
  function initCertFilter() {
    const filterBtns = document.querySelectorAll('.cert-filter-btn');
    const cards = document.querySelectorAll('.cert-card');
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        cards.forEach(function (card) {
          if (filter === 'all' || card.dataset.platform === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* --- Contact Form --- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      [name, email, message].forEach(function (field) {
        const error = field.parentElement.querySelector('.form-error');
        if (!field.value.trim()) {
          valid = false;
          if (error) error.classList.add('visible');
          field.setAttribute('aria-invalid', 'true');
        } else {
          if (error) error.classList.remove('visible');
          field.removeAttribute('aria-invalid');
        }
      });

      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        valid = false;
        const error = email.parentElement.querySelector('.form-error');
        if (error) {
          error.textContent = tx('contact.invalidEmail', 'Please enter a valid email address.');
          error.classList.add('visible');
        }
      }

      if (!valid) return;

      if (!CONTACT_ENDPOINT) {
        const demo = form.querySelector('.form-demo');
        if (demo) demo.classList.add('visible');
        form.reset();
        return;
      }

      fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value
        })
      }).then(function () {
        const success = form.querySelector('.form-success');
        if (success) success.classList.add('visible');
        form.reset();
      });
    });
  }

  /* --- Browser Mockup Click --- */
  function initBrowserMockups() {
    document.querySelectorAll('.browser-mockup[data-url]').forEach(function (mockup) {
      mockup.addEventListener('click', function () {
        const url = mockup.dataset.url;
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      });

      mockup.addEventListener('mousemove', function (e) {
        const cursor = mockup.querySelector('.browser-cursor');
        if (!cursor) return;
        const rect = mockup.getBoundingClientRect();
        cursor.style.left = (e.clientX - rect.left - 10) + 'px';
        cursor.style.top = (e.clientY - rect.top - 10) + 'px';
      });
    });
  }

  /* --- CV Check --- */
  function initCV() {
    const viewer = document.getElementById('cv-viewer');
    if (!viewer) return;

    const viewBtn = document.getElementById('cv-view-btn');
    const downloadBtn = document.getElementById('cv-download-btn');

    fetch(profile.cvPath, { method: 'HEAD' })
      .then(function (res) {
        if (res.ok) {
          viewer.innerHTML = '<iframe src="' + profile.cvPath + '" title="Agon Mustafaj CV"></iframe>';
        } else {
          viewer.innerHTML = '<div class="cv-placeholder">' + tx('cv.comingSoon', 'CV coming soon') + '</div>';
          if (viewBtn) { viewBtn.style.display = 'none'; }
          if (downloadBtn) { downloadBtn.style.display = 'none'; }
        }
      })
      .catch(function () {
        viewer.innerHTML = '<div class="cv-placeholder">' + tx('cv.comingSoon', 'CV coming soon') + '</div>';
        if (viewBtn) { viewBtn.style.display = 'none'; }
        if (downloadBtn) { downloadBtn.style.display = 'none'; }
      });
  }

  /* --- Render Wallet Card --- */
  function renderWalletCard(container) {
    if (!container) return;

    const emailLink = profile.email
      ? '<a href="mailto:' + profile.email + '" aria-label="Email">' + icons.email + '</a>'
      : '';

    container.innerHTML =
      '<div class="wallet-container">' +
        '<div class="wallet-card" role="img" aria-label="' + tx('wallet.aria', 'Digital identity card for ' + profile.name) + '">' +
          '<div class="wallet-card-inner">' +
            '<div class="wallet-top">' +
              '<div class="wallet-avatar" id="wallet-avatar">' +
                '<span>' + profile.initials + '</span>' +
              '</div>' +
            '</div>' +
            '<div class="wallet-info">' +
              '<h3>' + profile.name + '</h3>' +
              '<p>' + tx('wallet.role', 'Computer Science Student') + '<br>Junior SEO @ <a class="company-link" href="' + (profile.companyUrl || '#') + '" target="_blank" rel="noopener noreferrer">' + profile.company + '</a><br>' + tx('profile.location', profile.location) + '</p>' +
              '<div class="wallet-socials">' +
                '<a href="' + profile.linkedin + '" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">' + icons.linkedin + '</a>' +
                '<a href="' + profile.facebook + '" target="_blank" rel="noopener noreferrer me" aria-label="Facebook">' + icons.facebook + '</a>' +
                emailLink +
              '</div>' +
            '</div>' +
            '<div class="wallet-actions">' +
              '<button class="btn btn-secondary btn-sm" data-share>' + tx('wallet.share', 'Share Profile') + '</button>' +
              '<a href="/cv/" class="btn btn-secondary btn-sm">' + tx('ui.downloadCv', 'Download CV') + '</a>' +
              '<a href="/contact/" class="btn btn-primary btn-sm">' + tx('ui.contact', 'Contact') + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    const avatar = document.getElementById('wallet-avatar');
    if (avatar) {
      const img = new Image();
      img.src = '/assets/images/profile.jpg';
      img.alt = 'Portrait of ' + profile.name;
      img.decoding = 'async';
      img.onload = function () {
        avatar.innerHTML = '';
        avatar.appendChild(img);
      };
    }
  }

  /* --- Render Cert Cards --- */
  function renderCertCards(container, limit) {
    if (!container) return;
    const certs = limit ? certifications.slice(0, limit) : certifications;

    container.innerHTML = certs.map(function (cert) {
      const titleDisplay = cert.title || 'Certificate';
      const metaParts = [];
      if (cert.issuer) metaParts.push(cert.issuer);
      if (cert.date) metaParts.push(cert.date);
      if (cert.credentialId) metaParts.push('ID: ' + cert.credentialId);

      const previewLink = cert.pdf || cert.image || '#';
      const preview = cert.image
        ? '<a class="cert-preview" href="' + previewLink + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + titleDisplay + '">' +
            '<img src="' + cert.image + '" alt="' + titleDisplay + ' certificate issued by ' + (cert.issuer || cert.platform) + '" loading="lazy" decoding="async" width="900" height="650">' +
          '</a>'
        : (cert.pdf
          ? '<a class="cert-preview cert-platform-' + (cert.platform || 'default').toLowerCase().replace(/\s+/g, '-') + '" href="' + cert.pdf + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + titleDisplay + '">' +
              '<div class="cert-preview-inner">' +
                '<span class="cert-preview-badge">' + cert.platform + '</span>' +
                '<span class="cert-preview-title">' + titleDisplay + '</span>' +
                '<span class="cert-preview-cta">' + tx('ui.openPdf', 'Open PDF') + '</span>' +
              '</div>' +
            '</a>'
          : '');

      const buttons = [];
      if (cert.pdf) {
        buttons.push('<a href="' + cert.pdf + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">' + tx('ui.viewCertificate', 'View Certificate') + '</a>');
      }
      if (cert.verificationUrl) {
        buttons.push('<a href="' + cert.verificationUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">' + tx('ui.viewVerification', 'View Verification') + '</a>');
      }

      return '<article class="cert-card" data-platform="' + cert.platform + '">' +
        preview +
        '<div class="cert-card-body">' +
          '<div class="cert-platform">' +
            '<div class="cert-platform-icon">' + cert.platform.substring(0, 2).toUpperCase() + '</div>' +
            '<span class="text-secondary">' + cert.platform + '</span>' +
          '</div>' +
          '<h3>' + titleDisplay + '</h3>' +
          (metaParts.length ? '<p class="cert-meta">' + metaParts.join(' · ') + '</p>' : '') +
          '<div class="cert-actions">' + buttons.join('') + '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderVerificationLinks(container) {
    if (!container || typeof verificationLinks === 'undefined') return;
    container.innerHTML = verificationLinks.map(function (link, i) {
      return '<a class="btn btn-secondary btn-sm" href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
        tx('certs.verification', 'Coursera Verification') + ' ' + (i + 1) +
      '</a>';
    }).join('');
  }

  /* --- Render Project Showcase --- */
  function renderProjectShowcase(container) {
    if (!container) return;

    var featured = projects.filter(function (proj) { return proj.featured; });

    container.innerHTML = featured.map(function (proj, i) {
      const reverse = i % 2 === 1 ? ' reverse' : '';
      const tags = proj.technologies.map(function (t) {
        return '<span class="tag">' + t + '</span>';
      }).join('');

      const liveBtn = proj.url
        ? '<a href="' + proj.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">' + tx('ui.liveDemo', 'Live Demo') + '</a>'
        : '';

      const previewContent = proj.image
        ? '<img src="' + proj.image + '" alt="Homepage preview of the ' + proj.title + ' website" loading="lazy" decoding="async" width="1440" height="900">'
        : (proj.url
          ? '<div class="preview-placeholder">' + proj.title + '</div>'
          : '<div class="preview-placeholder">' + tx('ui.dataAnalysis', 'Data Analysis') + '</div>');

      return '<div class="project-showcase' + reverse + ' reveal">' +
        '<div class="browser-mockup" data-url="' + (proj.url || '') + '" tabindex="0" role="link" aria-label="View ' + proj.title + '">' +
          '<div class="browser-toolbar">' +
            '<div class="browser-dots"><span></span><span></span><span></span></div>' +
            '<div class="browser-url">' + (proj.url || tx('ui.localProject', 'Local Project')) + '</div>' +
          '</div>' +
          '<div class="browser-preview">' + previewContent +
            '<svg class="browser-cursor" viewBox="0 0 24 24" fill="white"><path d="M5.5 3.21l10.8 4.9c.48.22.48.94 0 1.16L5.5 14.16V3.21z"/></svg>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="project-number">' + tx('ui.project', 'PROJECT') + ' ' + proj.number + '</div>' +
          '<h2>' + proj.title + '</h2>' +
          '<p class="text-secondary" style="margin-top:0.75rem">' + (tx('projects.' + proj.slug, proj.description) || proj.description) + '</p>' +
          '<div class="project-tags">' + tags + '</div>' +
          '<div class="project-links">' +
            liveBtn +
            '<a href="/projects/' + proj.slug + '/" class="btn btn-secondary btn-sm">' + tx('ui.caseStudy', 'Case Study') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* --- JSON-LD Helper --- */
  window.generatePersonSchema = function () {
    const person = {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: profile.name,
      givenName: profile.givenName,
      familyName: profile.familyName,
      url: SITE_URL + '/',
      image: profile.image,
      description: profile.description,
      jobTitle: profile.role,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: profile.university
      },
      knowsAbout: profile.knowsAbout.slice(),
      sameAs: getProfileSameAs(),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pristina',
        addressCountry: 'XK'
      },
      email: profile.email,
      telephone: profile.telephone,
      mainEntityOfPage: { '@id': SITE_URL + '/about/' }
    };

    if (profile.company) {
      person.worksFor = {
        '@type': 'Organization',
        name: profile.company
      };
      if (profile.companyUrl) person.worksFor.url = profile.companyUrl;
    }

    return person;
  };

  window.generateWebsiteSchema = function () {
    return {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL + '/',
      name: profile.name,
      inLanguage: ['en', 'sq'],
      publisher: { '@id': PERSON_ID }
    };
  };

  window.generateBreadcrumbSchema = function (items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (item, i) {
        return {
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: SITE_URL + item.path
        };
      })
    };
  };

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof I18N !== 'undefined') I18N.applyI18n();
    initTheme();

    const page = document.body.dataset.page;
    renderNavbar(page);
    renderFooter();

    renderWalletCard(document.getElementById('wallet-card'));
    renderCertCards(document.getElementById('cert-featured'), 3);
    renderCertCards(document.getElementById('cert-grid'));
    renderVerificationLinks(document.getElementById('verification-links'));
    renderProjectShowcase(document.getElementById('project-showcase'));

    initCustomCursor();
    initWallet();
    initShareModal();
    initScrollReveal();
    initMagneticButtons();
    initCardTilt();
    initTerminal();
    initSkills();
    initSeoFlow();
    initDevPipeline();
    initCertFilter();
    initContactForm();
    initBrowserMockups();
    initCV();
  });
})();
