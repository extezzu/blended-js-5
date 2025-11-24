import { localStorageApi } from './local-storage-api.js';

let tasks = [];

export const tasksModule = {
  init() {
    tasks = localStorageApi.loadTasks();
    return tasks;
  },

  addTask(title, description) {
    if (!title || !title.trim() || !description || !description.trim()) {
      alert('Будь ласка, заповніть обидва поля!');
      return null;
    }

    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim()
    };

    tasks.push(newTask);
    localStorageApi.saveTasks(tasks);
    return newTask;
  },

  deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    localStorageApi.saveTasks(tasks);
  },

  getTasks() {
    return [...tasks];
  }
};