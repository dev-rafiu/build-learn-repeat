import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const tasksList = document.getElementById("list") as HTMLUListElement;
const form = document.getElementById("new-task-form") as HTMLFormElement;
const titleInput = document.getElementById("task-title") as HTMLInputElement;

let allTasks: Task[] = loadFromStorage();
renderTasks(allTasks);

// save a task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value;
  if (title == "" || title == null) {
    return;
  }

  const newTask: Task = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: new Date(),
  };
  // createNewTask(newTask);
  allTasks.push(newTask);
  saveToStorage(allTasks);
  renderTasks(allTasks);

  titleInput.value = "";
});

// Render all tasks
function renderTasks(tasks: Task[]) {
  tasksList.innerHTML = "";
  tasks.forEach(createNewTask);
}

// create a new task
function createNewTask(task: Task) {
  const { id, title, completed } = task;

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = title;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", id);
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  checkbox.addEventListener("change", () => {
    deleteFromStorage(id);
  });

  const list = document.createElement("li");
  list.append(checkbox, label);

  tasksList.appendChild(list);
}

// save task to local storage
function saveToStorage(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// get tasks from local storage
function loadFromStorage(): Task[] {
  const tasksJson = localStorage.getItem("tasks");
  if (tasksJson == null) return [];
  return JSON.parse(tasksJson);
}

// delete task from local storage
function deleteFromStorage(id: string) {
  const tasks = loadFromStorage();
  const filteredTasks = tasks.filter((item) => item.id != id);
  saveToStorage(filteredTasks);
  renderTasks(filteredTasks);
}
