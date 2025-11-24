const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export const localStorageApi = {

saveTasks(tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
},

    loadTasks() {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
},


saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
},

loadTheme() {
    return localStorage.getItem(THEME_KEY) || 'theme-dark';
}
};