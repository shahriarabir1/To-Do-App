//Select Elements

let input = document.querySelector("#taskinput");
let filter = document.querySelector("#filter");
let form = document.querySelector(".web");
let Ulist = document.querySelector("#taskList");
let clr = document.querySelector("#clr");

//Event Listener

form.addEventListener("submit", addTask);
Ulist.addEventListener("click", removeOne);
clr.addEventListener("click", removeAll);
document.addEventListener("DOMContentLoaded", show);

//Functions:


function addTask(e) {
  e.preventDefault();
  if (input.value === "") {
    alert("No task added");
  } else {
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "X";
    link.style.textDecoration = "none";
    link.style.marginLeft = "20px";
    link.style.color = "red";
    list.appendChild(link);
    saveStorage(input.value);
    Ulist.appendChild(list);

    input.value = "";
  }
}

function removeOne(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;

      li.remove();
      removeStorage(li.firstChild.textContent);
    }
  }
}
function removeAll() {
  while (Ulist.firstChild) {
    Ulist.removeChild(Ulist.firstChild);
  }
  localStorage.clear();
}

function saveStorage(e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(e);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeStorage(e) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (task === e.trim()) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function show() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((i) => {
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(i + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "X";
    link.style.textDecoration = "none";
    link.style.marginLeft = "20px";
    link.style.color = "red";
    list.appendChild(link);
    Ulist.appendChild(list);
  });
}
