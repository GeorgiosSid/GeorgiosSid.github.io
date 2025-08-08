let hasExited = false;

// Auto-dismiss after 10 seconds with bounce
const autoDismissTimer = setTimeout(() => {
  if (hasExited) return;
  hasExited = true;
  bounceThenExit();
}, 10000);

// Register click on the overlay itself (anywhere)
window.addEventListener('click', () => {
  if (hasExited) return;
  hasExited = true;
  clearTimeout(autoDismissTimer);
  bounceThenExit();
});

// Bounce the circle once more before disappearing
function bounceThenExit() {
  const circle = document.querySelector('.welcome-circle');
  circle.classList.add('bounce-exit');

  setTimeout(() => {
    dismissOverlay();
  }, 500); // Wait for bounce to finish
}

// Final cleanup and show content
function dismissOverlay() {
  const overlay = document.getElementById('welcome-overlay');
  overlay.style.display = 'none';
  document.body.classList.add('active');
}
