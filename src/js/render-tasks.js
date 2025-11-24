import { tasksModule } from './tasks.js';

export const renderTasks = {
  renderTaskList() {
    const tasks = tasksModule.getTasks();
    const taskList = document.getElementById('task-list');
    
    if (tasks.length === 0) {
      taskList.innerHTML = '<li class="task-list-item"><p>No tasks yet</p></li>';
      return;
    }

    const markup = tasks.map(task => this.createTaskMarkup(task)).join('');
    taskList.innerHTML = markup;
    
    this.addDeleteListeners();
  },

  createTaskMarkup(task) {
    return `
      <li class="task-list-item" data-id="${task.id}">
        <button class="task-list-item-btn" type="button">Delete</button>
        <h3>${this.escapeHtml(task.title)}</h3>
        <p>${this.escapeHtml(task.description)}</p>
      </li>
    `;
  },

  addDeleteListeners() {
    const deleteButtons = document.querySelectorAll('.task-list-item-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const taskItem = e.target.closest('.task-list-item');
        const taskId = taskItem.dataset.id;
        tasksModule.deleteTask(taskId);
        this.renderTaskList();
      });
    });
  },

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  clearForm() {
    const taskForm = document.getElementById('task-form');
    if (taskForm) {
      taskForm.reset(); // Очищає всі поля форми
    }
  }
};