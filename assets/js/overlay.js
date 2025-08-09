// overlay.js — overlay enter/exit + ESC
(function () {
  const overlay = document.getElementById('welcome-overlay');
  const circle = document.querySelector('.welcome-circle');
  if (!overlay || !circle) return;

  let hasExited = false;
  const autoDismissTimer = setTimeout(exit, 10000);

  function dismissOverlay() {
    overlay?.remove();
    document.body.classList.add('active');
  }
  function bounceThenExit() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return dismissOverlay();
    circle.classList.add('bounce-exit');
    setTimeout(() => dismissOverlay(), 500);
  }
  function exit() {
    if (hasExited) return;
    hasExited = true;
    clearTimeout(autoDismissTimer);
    bounceThenExit();
  }

  window.addEventListener('click', exit);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') exit(); });
})();
