function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // script.js
const toggleButton = document.getElementById('theme-toggle');


const icon = document.getElementById('icon');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = '🌙'; // Moon icon for dark mode
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '🌞'; // Sun icon for light mode
    localStorage.setItem('theme', 'light');
  }
});
