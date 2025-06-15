// Recepción de datos
let tasks = [];

// Función para pedir datos
const addTask = () => {
  const newTask = prompt("What task do you want to add?");
  if (newTask) {
    tasks.push(newTask);
    alert("Added: " + newTask);
  }
};

// Función para ver tareas actuales
function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks have been added yet");
  } else {
    console.log("Current tasks:\n" + tasks.join("\n"));
  }
}

// Menú principal
const showMenu = () =>
  prompt(
    "Make sure to open the console log to see the app in action\n" +
      "Task Menu:\n" +
      "1. Add Task\n" +
      "2. View Tasks\n" +
      "3. Exit\n" +
      "Enter your choice (1-3):"
  );

// Procesamiento principal del programa
function runTaskManager() {
  let userChoice;
  do {
    userChoice = showMenu();

    switch (userChoice) {
      case "1":
        addTask();
        break;
      case "2":
        viewTasks();
        break;
      case "3":
        alert("Exiting the Task Manager Program... Bye!");
        break;
      default:
        alert("Please enter a valid choice from 1-3");
    }
  } while (userChoice !== "3");
}

// Iniciar la aplicación
runTaskManager();
