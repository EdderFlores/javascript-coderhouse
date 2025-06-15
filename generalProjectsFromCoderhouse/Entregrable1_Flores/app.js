// Recepcion de datos
let tasks = [];

// funcion para pedir datos
const addTask = () => {
  const newTask = prompt("What task do you want to add");
  if (newTask) {
    tasks.push(newTask);
    alert("Added " + newTask);
  }
};

// funcion para ver tareas actuales

function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks have been added yet");
  } else {
    console.log("Current tasks:\n" + tasks.join("\n"));
  }
}

// start menu para agregar tareas

const showMenu = () =>
  prompt(
    "Make sure to open the console log to see the app in action, to reopen the app just refresh the page\n" +
      "Task Menu:\n" +
      "1. Add Task\n" +
      "2. View Tasks\n" +
      "3. Exit\n" +
      "Enter your choice from 1-4:"
  );

// Procesamiento principal de programa

let userChoise;
do {
  userChoise = showMenu();

  switch (userChoise) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      alert("Exiting the Task Manager Program... Bye!");
      break;
    case "4":
      alert("Exiting the Task Manager Program... Bye!");
      break;
    default:
      console.log("Please enter a valid choise from 1-3");
  }
} while (userChoise !== "3");

viewTasks();
