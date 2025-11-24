import { localStorageApi } from './local-storage-api.js';

export const themeModule = {
  init() {
    const savedTheme = localStorageApi.loadTheme();
    document.body.className = savedTheme;
    this.updateButtonText();
  },

  toggleTheme() {
    const isDark = document.body.classList.contains('theme-dark');
    
    if (isDark) {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }
    
    localStorageApi.saveTheme(document.body.className);
    this.updateButtonText();
  },

  updateButtonText() {
    const themeButton = document.getElementById('themeToggle');
    if (themeButton) {
      const isDark = document.body.classList.contains('theme-dark');
      themeButton.textContent = isDark ? '🌙 Dark' : '☀️ Light';
    }
  }
};