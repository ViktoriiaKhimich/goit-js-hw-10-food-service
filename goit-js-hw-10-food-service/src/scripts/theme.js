const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

// document.body.classList.add(Theme.LIGHT)
const themeCheckbox = document.querySelector('#theme-switch-toggle');
themeCheckbox.addEventListener('change', onCheckboxThemeChanger)

const savedTheme = localStorage.getItem('theme');
document.body.classList.toggle(Theme.LIGHT, savedTheme === Theme.LIGHT)
document.body.classList.toggle(Theme.DARK, savedTheme === Theme.DARK)
themeCheckbox.checked = savedTheme === Theme.DARK; 

function onCheckboxThemeChanger() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', themeCheckbox.checked ? Theme.DARK : Theme.LIGHT)
        // localStorage.setItem('Theme.DARK', JSON.stringify(Theme.DARK))
}
