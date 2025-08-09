// Copy-to-clipboard with tiny feedback
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.copy-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 1200);
      } catch (e) {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy');
        ta.remove();
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 1200);
      }
    });
  });
});
