/*Theme*/
const storage = localStorage.getItem('darkMode');

const isDark = (storage ? storage === 'true' : 'false');
document.documentElement.classList.toggle('dark', isDark);

function toggleDarkMode() {
document.documentElement.classList.toggle('dark');

localStorage.setItem(
  'darkMode',
  document.documentElement.classList.contains('dark') ? 'true' : 'false'
);
}