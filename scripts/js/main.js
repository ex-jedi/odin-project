// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

const toggleThemeButton = document.querySelector('.toggle-theme-button');
const root = document.documentElement;
const themeText = document.querySelector('.current-theme-text');

function toggleTheme() {
  const switchClass = root.className === 'light' ? 'dark' : 'light';
  root.className = switchClass;
  themeText.innerText = switchClass;
}

toggleThemeButton.addEventListener('click', toggleTheme);
