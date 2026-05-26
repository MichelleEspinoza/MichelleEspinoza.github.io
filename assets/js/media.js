/* Theme */
const storage = localStorage.getItem('darkMode');

const isDark = storage ? storage === 'true' : true;

document.documentElement.classList.toggle('dark', isDark);

function toggleDarkMode() {
 
  const currentDark = document.documentElement.classList.toggle('dark');
  
  localStorage.setItem('darkMode', currentDark ? 'true' : 'false');
}