// Clase para representar una tarea
class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
    this.createdAt = new Date();
  }
}

// Clase para manejar el gestor de tareas
class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.currentFilter = "all";
  }

  // Cargar tareas desde localStorage
  loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  // Guardar tareas en localStorage
  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  // Agregar una nueva tarea
  addTask(description) {
    if (!description.trim()) return false;

    const newTask = new Task(Date.now().toString(), description.trim());

    this.tasks.push(newTask);
    this.saveTasks();
    return true;
  }

  // Eliminar una tarea
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  // Borrar todas las tareas
  deleteAllTasks() {
    this.tasks = [];
    this.saveTasks();
  }

  // Marcar tarea como completada/incompleta
  toggleTaskCompletion(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.saveTasks();
  }

  // Filtrar y ordenar tareas
  filterTasks(filter) {
    this.currentFilter = filter;

    let filteredTasks = [...this.tasks];

    // Ordenar siempre por completado (pendientes primero) y luego por fecha (más recientes primero)
    filteredTasks.sort((a, b) => {
      if (a.completed === b.completed) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return a.completed ? 1 : -1;
    });

    switch (filter) {
      case "completed":
        return filteredTasks.filter((task) => task.completed);
      case "pending":
        return filteredTasks.filter((task) => !task.completed);
      default:
        return filteredTasks;
    }
  }
}

// Instancia del gestor de tareas
const taskManager = new TaskManager();

// Elementos del DOM
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const tasksContainer = document.getElementById("tasksContainer");
const showAllBtn = document.getElementById("showAll");
const showPendingBtn = document.getElementById("showPending");
const showCompletedBtn = document.getElementById("showCompleted");
const deleteAllBtn = document.getElementById("deleteAll");

// Renderizar las tareas
function renderTasks() {
  const filteredTasks = taskManager.filterTasks(taskManager.currentFilter);

  if (filteredTasks.length === 0) {
    tasksContainer.innerHTML =
      '<p class="no-tasks">No hay tareas para mostrar.</p>';
    return;
  }

  tasksContainer.innerHTML = "";

  filteredTasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.className = `task-item ${task.completed ? "completed" : ""}`;
    taskElement.innerHTML = `
      <span>${task.description}</span>
      <div class="task-actions">
        <button class="complete-btn" data-id="${task.id}">
          ${task.completed ? "Deshacer" : "Completar"}
        </button>
        <button class="delete-btn" data-id="${task.id}">Eliminar</button>
      </div>
    `;
    tasksContainer.appendChild(taskElement);
  });

  // Agregar event listeners a los botones de cada tarea
  document.querySelectorAll(".complete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      taskManager.toggleTaskCompletion(e.target.dataset.id);
      renderTasks();
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      taskManager.deleteTask(e.target.dataset.id);
      renderTasks();
    });
  });
}

// Event Listeners
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskManager.addTask(taskInput.value)) {
    taskInput.value = "";
    renderTasks();
  }
});

showAllBtn.addEventListener("click", () => {
  taskManager.currentFilter = "all";
  renderTasks();
});

showPendingBtn.addEventListener("click", () => {
  taskManager.currentFilter = "pending";
  renderTasks();
});

showCompletedBtn.addEventListener("click", () => {
  taskManager.currentFilter = "completed";
  renderTasks();
});

// Event Listener para el botón "Borrar Todas"
deleteAllBtn.addEventListener("click", () => {
  if (taskManager.tasks.length === 0) {
    return;
  }

  if (
    confirm(
      "¿Estás seguro que deseas borrar todas las tareas? Esta acción no se puede deshacer."
    )
  ) {
    taskManager.deleteAllTasks();
    renderTasks();
  }
});

// Renderizar tareas al cargar la página
document.addEventListener("DOMContentLoaded", renderTasks);
