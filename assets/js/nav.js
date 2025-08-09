// nav.js — highlight active section + force start at top

(function () {
  // belt-and-suspenders: also disable restore here
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  function resetToTop() {
    // strip any hash so browser can't auto-jump
    if (location.hash) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    // jump to very top (no smooth)
    window.scrollTo(0, 0);
  }

  // Run early and late to beat all restore paths
  document.addEventListener('DOMContentLoaded', resetToTop);
  window.addEventListener('load', resetToTop, { once: true });
  window.addEventListener('pageshow', (e) => { if (e.persisted) resetToTop(); });

  // When language changes (from i18n.js)
  document.addEventListener('lang:changed', resetToTop);

  // ---- Active section highlight (unchanged) ----
  const navLinks = Array.from(document.querySelectorAll('.sidebar-nav a'));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      navLinks.forEach(l => {
        const active = (l.getAttribute('href') === id);
        l.classList.toggle('active', active);
        if (active) l.setAttribute('aria-current', 'page');
        else l.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '0px 0px -60% 0px', threshold: 0.1 });

  sections.forEach(sec => io.observe(sec));
})();
