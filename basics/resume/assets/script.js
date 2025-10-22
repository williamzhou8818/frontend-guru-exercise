const btn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const systemPrefDark = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;

// 初始化主题
const initTheme = savedTheme || (systemPrefDark ? 'dark' : 'light');
document.body.setAttribute('data-theme', initTheme);
btn.textContent = initTheme === 'dark' ? '☀️' : '🌙';

// 切换主题
btn.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// 监听系统主题变化
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      btn.textContent = e.matches ? '☀️' : '🌙';
    }
  });
