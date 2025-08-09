// scrolltop.js — show/hide and smooth scroll
(function () {
  const btn = document.getElementById("scrollToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
