let sub = document.querySelector(".user-info button");
let userName = document.getElementsByName("user-name")[0];
let gender = document.querySelector(".user-info select");
let userInfo = document.querySelector(".user-info");
let helloDiv = document.querySelector(".hello-name");


sub.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value !== "") {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("gender", gender.value);

    if (gender.value === "male") {
      helloDiv.innerHTML = `Hello MR. ${userName.value}`;
    } else {
      helloDiv.innerHTML = `Hello MSS. ${userName.value}`;
    }

    userInfo.style.display = "none";
  }
});

//APP
let tasks = document.querySelector(".tasks");
let addBtn = document.querySelector(".add-task");
let spanID = "01";

onload = function () {
  let savedName = localStorage.getItem("name");
  let savedGender = localStorage.getItem("gender");

  if (savedName && savedGender) {
    if (savedGender === "male") {
      helloDiv.innerHTML = `Hello MR. ${savedName}`;
    } else {
      helloDiv.innerHTML = `Hello MSS. ${savedName}`;
    }
    userInfo.style.display = "none";
  }
  // =============================================
  let keys = Object.keys(localStorage)
    .filter((k) => k.startsWith("id-"))
    .sort((a, b) => Number(a.split("-")[1]) - Number(b.split("-")[1]));
  for (let key of keys) {
    let taskText = localStorage.getItem(key);
    // Creat Elements
    let task = document.createElement("div");
    task.className = "task";
    let span = document.createElement("span");
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    // Remove Task
    doneBtn.addEventListener("click", () => {
      task.remove();
      localStorage.removeItem(span.id);
      // spanID--;
      if (tasks.children.length === 0) {
        tasks.style.backgroundColor = "transparent";
      }
    });
    //  Append
    tasks.appendChild(task);
    span.innerHTML = taskText;
    span.id = key;
    task.appendChild(span);
    task.appendChild(doneBtn);
  }
  let ids = keys.map((k) => Number(k.split("-")[1]));
  spanID = ids.length ? Math.max(...ids) : 0;
  if (tasks.children.length > 0) {
    tasks.style.backgroundColor = "var(--main-color)";
  }
};
function addTask(e) {
  e.preventDefault();

  // Creat Elements
  let task = document.createElement("div");
  task.className = "task";
  let span = document.createElement("span");
  let doneBtn = document.createElement("button");
  doneBtn.innerHTML = "Done";

  // Remove Task
  doneBtn.addEventListener("click", () => {
    task.remove();
    localStorage.removeItem(span.id);
    // spanID--;

    if (tasks.children.length === 0) {
      tasks.style.backgroundColor = "transparent";
    }
  });
  //  Append
  let taskName = document.getElementsByName("task-name")[0];
  if (taskName.value !== "") {
    tasks.appendChild(task);
    span.innerHTML = taskName.value;
    span.id = `id-${++spanID}`;
    task.appendChild(span);
    task.appendChild(doneBtn);
    taskName.value = "";
  }
  localStorage.setItem(`${span.id}`, span.innerHTML);

  if (tasks.children.length > 0) {
    tasks.style.backgroundColor = "var(--main-color)";
  }
}
addBtn.addEventListener("click", addTask);

let clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  tasks.innerHTML = "";
  tasks.style.backgroundColor = "transparent";
  userInfo.style.display = "flex";
  helloDiv.innerHTML = "Hello";
});
