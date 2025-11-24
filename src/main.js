import { tasksModule } from './js/tasks.js';
import { renderTasks } from './js/render-tasks.js';
import { themeModule } from './js/theme-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  themeModule.init();
  
  // Initialize tasks
  tasksModule.init();
  renderTasks.renderTaskList();

  // Add task form handler
  const taskForm = document.getElementById('task-form');
  if (taskForm) {
    taskForm.addEventListener('submit', handleFormSubmit);
  }

  // Theme toggle handler
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      themeModule.toggleTheme();
    });
  }
});

function handleFormSubmit(e) {
  e.preventDefault(); // Важливо: запобігає перезавантаженню сторінки
  console.log('Form submitted');

  const formData = new FormData(e.target);
  const title = formData.get('taskName');
  const description = formData.get('taskDescription');
  
  console.log('Title:', title, 'Description:', description);

  const newTask = tasksModule.addTask(title, description);
  
  if (newTask) {
    console.log('Task added:', newTask);
    renderTasks.renderTaskList();
    renderTasks.clearForm();
  } else {
    alert('Будь ласка, заповніть обидва поля!');
  }
}