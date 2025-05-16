const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 4,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 5,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 6,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

const todoContainer = document.getElementById("todo-container");
const doingContainer = document.getElementById("doing-container");
const doneContainer = document.getElementById("done-container");

const modal = document.getElementById("edit-modal");
const titleInput = document.getElementById("modal-title");
const descriptionInput = document.getElementById("modal-description");
const statusSelect = document.getElementById("modal-status");
const closeModalBtn = document.getElementById("close-modal");

let selectedTask = null;
function openModal(task) {
  selectedTask = task;

  titleInput.value = task.title;
  descriptionInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

function LoadTodoTasks(tasksArray) {
  tasksArray.forEach((element) => {
    if (element.status === "todo") {
      let todoTask = document.createElement("div");
      todoTask.innerText = element.title;

      todoTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      todoTask.addEventListener("click", () => openModal(element));

      todoContainer.appendChild(todoTask);
    }
  });
}
function closeModal() {
  modal.close();
  selectedTask = null;
  titleInput.value = "";
  descriptionInput.value = "";
  statusSelect.value = "";
}

closeModalBtn.addEventListener("click", closeModal);

function LoadDoingTasks(tasksArray) {
  tasksArray.forEach((element) => {
    if (element.status === "doing") {
      let doingTask = document.createElement("div");
      doingTask.innerText = element.title;

      doingTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      doingTask.addEventListener("click", () => openModal(element));

      doingContainer.appendChild(doingTask);
    }
  });
}
function LoadDoneTasks(tasksArray) {
  tasksArray.forEach((element) => {
    if (element.status === "done") {
      let doneTask = document.createElement("div");
      doneTask.innerText = element.title;

      doneTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      doneTask.addEventListener("click", () => openModal(element));

      doneContainer.appendChild(doneTask);
    }
  });
}

LoadTodoTasks(initialTasks);
LoadDoingTasks(initialTasks);
LoadDoneTasks(initialTasks);
