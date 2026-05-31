// theme.js — Night / Light mode toggle logic for Jeevika

(function () {
  // Apply saved theme immediately on every page load (before render to avoid flash)
  const saved = localStorage.getItem('jeevikaTheme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  // Wait for DOM to be ready before wiring up toggle buttons
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    updateThemeIcon(btn, saved);

    btn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('jeevikaTheme', next);
      updateThemeIcon(btn, next);
    });
  });

  function updateThemeIcon(btn, theme) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Night Mode');
  }
})();
