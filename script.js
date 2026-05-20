/* script_2a.js — theme / lang / reveal  (IIFE) */
(function () {
  'use strict';

  const html       = document.documentElement;
  const themeBtn   = document.getElementById('theme-toggle');
  const langBtn    = document.getElementById('lang-toggle');

  /* ── Theme ── */
  function applyTheme(theme) {
    html.dataset.theme = theme;
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeBtn.setAttribute('aria-pressed', String(theme === 'light'));
    localStorage.setItem('theme', theme);
  }

  (function initTheme() {
    const saved     = localStorage.getItem('theme');
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    applyTheme(saved || preferred);
  })();

  themeBtn.addEventListener('click', function () {
    applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  /* ── Language ── */
  function applyLang(lang) {
    const isEn = lang === 'en';
    html.lang = lang;
    langBtn.textContent = isEn ? 'JP' : 'EN';
    langBtn.setAttribute('aria-pressed', String(isEn));
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n-jp]').forEach(function (el) {
      el.textContent = isEn ? el.dataset.i18nEn : el.dataset.i18nJp;
    });
  }

  (function initLang() {
    const saved     = localStorage.getItem('lang');
    const preferred = navigator.language.startsWith('en') ? 'en' : 'ja';
    applyLang(saved || preferred);
  })();

  langBtn.addEventListener('click', function () {
    applyLang(html.lang === 'ja' ? 'en' : 'ja');
  });

  /* ── Reveal (IntersectionObserver) ── */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
