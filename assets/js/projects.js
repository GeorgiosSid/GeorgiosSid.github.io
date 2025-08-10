// assets/js/projects.js
(function () {
  function tune(v) {
    const rate = parseFloat(v.dataset.rate || "1");
    try { v.playbackRate = rate; } catch (e) {}

    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const vids = Array.from(document.querySelectorAll(".proj-media video"));
    vids.forEach(tune);

    // Pause when off-screen, resume when visible
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) target.play().catch(() => {});
          else target.pause();
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

      vids.forEach(v => io.observe(v));
    }
  });
})();
