// assets/js/icon-swap.js
(function () {
  function applyThemeSensitiveSrc() {
    const isDark = document.documentElement.classList.contains('dark-theme');
    document.querySelectorAll('img[data-dark-src]').forEach(img => {
      const dark  = img.dataset.darkSrc;
      const light = img.dataset.lightSrc || img.src;
      const desired = isDark ? dark : light;
      if (desired && img.getAttribute('src') !== desired) {
        img.setAttribute('src', desired);
      }
    });
  }

  // Run on load
  document.addEventListener('DOMContentLoaded', applyThemeSensitiveSrc);

  // Listen for theme toggle events (your theme.js already emits this)
  window.addEventListener('theme:changed', applyThemeSensitiveSrc);
  document.addEventListener('theme:changed', applyThemeSensitiveSrc);

  // Fallback: watch for class changes on <html>
  const mo = new MutationObserver(applyThemeSensitiveSrc);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
})();
