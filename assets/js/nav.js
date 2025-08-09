// nav.js — highlight active section
(function () {
  const navLinks = Array.from(document.querySelectorAll(".sidebar-nav a"));
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
