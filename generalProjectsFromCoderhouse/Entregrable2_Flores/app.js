class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
    this.createdAt = new Date();
  }
}

class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.currentFilter = "all";
  }

  loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  addTask(description) {
    if (!description.trim()) return false;

    const newTask = new Task(Date.now().toString(), description.trim());

    this.tasks.unshift(newTask); // Agrega al inicio para ver las más recientes primero
    this.saveTasks();
    return true;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  deleteAllTasks() {
    this.tasks = [];
    this.saveTasks();
  }

  toggleTaskCompletion(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.saveTasks();
  }

  filterTasks(filter) {
    this.currentFilter = filter;
    let filteredTasks = [...this.tasks];

    // Ordenar por completado (no completadas primero) y luego por fecha (más nuevas primero)
    return filteredTasks
      .sort((a, b) => {
        if (a.completed === b.completed) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return a.completed ? 1 : -1;
      })
      .filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
      });
  }
}

// UI Controller
const taskManager = new TaskManager();
const DOM = {
  taskForm: document.getElementById("taskForm"),
  taskInput: document.getElementById("taskInput"),
  tasksContainer: document.getElementById("tasksContainer"),
  showAllBtn: document.getElementById("showAll"),
  showPendingBtn: document.getElementById("showPending"),
  showCompletedBtn: document.getElementById("showCompleted"),
  deleteAllBtn: document.getElementById("deleteAll"),
  filterButtons: document.querySelectorAll(".filter-buttons button"),
};

function renderTasks() {
  const filteredTasks = taskManager.filterTasks(taskManager.currentFilter);

  if (filteredTasks.length === 0) {
    DOM.tasksContainer.innerHTML =
      '<p class="no-tasks">No hay tareas para mostrar. ¡Agrega una!</p>';
    return;
  }

  DOM.tasksContainer.innerHTML = "";

  filteredTasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.className = `task-item ${task.completed ? "completed" : ""}`;
    taskElement.innerHTML = `
      <span>${task.description}</span>
      <div class="task-actions">
        <button class="complete-btn" data-id="${task.id}">
          ${task.completed ? "↩️ Deshacer" : "✓ Completar"}
        </button>
        <button class="delete-btn" data-id="${task.id}">✕ Eliminar</button>
      </div>
    `;
    DOM.tasksContainer.appendChild(taskElement);
  });

  // Actualizar botones de filtro activos
  DOM.filterButtons.forEach((btn) => btn.classList.remove("active"));
  document
    .getElementById(
      `show${
        taskManager.currentFilter.charAt(0).toUpperCase() +
        taskManager.currentFilter.slice(1)
      }`
    )
    ?.classList.add("active");
}

// Event Listeners
DOM.taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskManager.addTask(DOM.taskInput.value)) {
    DOM.taskInput.value = "";
    DOM.taskInput.focus();
    renderTasks();
  }
});

DOM.showAllBtn.addEventListener("click", () => {
  taskManager.currentFilter = "all";
  renderTasks();
});

DOM.showPendingBtn.addEventListener("click", () => {
  taskManager.currentFilter = "pending";
  renderTasks();
});

DOM.showCompletedBtn.addEventListener("click", () => {
  taskManager.currentFilter = "completed";
  renderTasks();
});

DOM.deleteAllBtn.addEventListener("click", () => {
  if (taskManager.tasks.length === 0) return;

  if (
    confirm("⚠️ ¿Borrar TODAS las tareas? Esta acción no se puede deshacer.")
  ) {
    taskManager.deleteAllTasks();
    renderTasks();
  }
});

// Delegación de eventos para botones dinámicos
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete-btn")) {
    taskManager.toggleTaskCompletion(e.target.dataset.id);
    renderTasks();
  }

  if (e.target.classList.contains("delete-btn")) {
    taskManager.deleteTask(e.target.dataset.id);
    renderTasks();
  }
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
