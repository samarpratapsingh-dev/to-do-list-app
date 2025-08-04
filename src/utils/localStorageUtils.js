const STORAGE_KEY = "todo-list-tasks";

// Save tasks array to localStorage
export function saveTasksToStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Load tasks array from localStorage
export function loadTasksFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Clear tasks (optional utility)
export function clearTasksFromStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
