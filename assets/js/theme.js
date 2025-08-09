// theme.js — always start dark (handled inline), then honor saved preference on first run
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
  if (saved === 'light') root.classList.remove('dark-theme'); // otherwise stays dark

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const isDark = root.classList.contains('dark-theme');
  btn.setAttribute('aria-pressed', String(isDark));

  btn.addEventListener('click', () => {
    const nowDark = root.classList.toggle('dark-theme');
    btn.setAttribute('aria-pressed', String(nowDark));
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
  });
})();
