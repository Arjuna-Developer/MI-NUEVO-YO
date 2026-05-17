/* ════════════════════════════════════════════════════════════════
   ARJUNAFIT — LANDING INTERACTIONS
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── NAV scroll behavior ─────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  const handleScroll = () => {
    const y = window.scrollY;
    if (y > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    lastScroll = y;
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ─── Mobile menu ─────────────────────────────────────────────── */
  const menuBtn = document.querySelector('.nav__menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close on link click
  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  /* ─── Reveal on scroll ────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ─── Smooth-scroll for nav anchors ───────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href === '#registro') return; // let registro be handled
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─── CTA registro → arjunafit.app/registro.html ──────────────── */
  // The CTAs labeled with class .js-register route to the registration page
  document.querySelectorAll('.js-register').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Allow modifier-clicks (open in new tab) to behave normally
      if (e.metaKey || e.ctrlKey) return;
      // Default behavior is anchor navigation; no override needed
    });
  });

  /* ─── Year in footer ──────────────────────────────────────────── */
  const yearEl = document.querySelector('.js-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
