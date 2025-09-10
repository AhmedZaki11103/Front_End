let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector(" [title = 'Current']");
let classes = document.querySelector(".classes-list div");
//  هنا كنت عايز أعمل فانكشن تعرض الكلاسيسس في الديف وبعدين أعمل واحدة
//  تانية تشيل منه واشتغلت عادي بس بعدين قولت أخليهم فانكشن
//  واحدة تشيل كل القديم وتعرض اللي موجود حالا بس
// function showAddClasses() {
//   if (current.classList.length === 0) {
//     let noClasses = document.createElement("span");
//     noClasses.innerHTML = "No Classes To Show";
//     classes.appendChild(noClasses);
//   } else {
//     mainLoop: for (let i = 0; i < current.classList.length; i++) {
//       childLoop: for (let j = 0; j < classes.children.length; j++) {
//         if (classes.children[j].innerHTML === current.classList[i]) {
//           continue mainLoop;
//         }
//       }
//       let newClass = document.createElement("span");
//       newClass.innerHTML = current.classList[i];
//       classes.appendChild(newClass);
//     }
//   }
// }
// showAddClasses();

function showClasses() {
  while (classes.children.length > 0) {
    classes.removeChild(classes.firstChild);
  }
  if (current.classList.length === 0) {
    let noClasses = document.createElement("span");
    noClasses.innerHTML = "No Classes To Show";
    classes.appendChild(noClasses);
  } else {
    for (let i = 0; i < current.classList.length; i++) {
      let nowClass = document.createElement("span");
      nowClass.innerHTML = current.classList[i];
      classes.appendChild(nowClass);
    }
  }
}
showClasses();

// ADD
function addClasses() {
  let newClasses = add.value.split(" ");
  if (add.value !== "") {
    for (let i = 0; i < newClasses.length; i++) {
      current.classList.add(newClasses[i].toLowerCase());
    }
    add.value = "";
    showClasses();
  }
}
add.addEventListener("blur", addClasses);

// REMOVE
function removeClasses() {
  let oldClasses = remove.value.split(" ");
  if (remove.value !== "") {
    for (let i = 0; i < oldClasses.length; i++)
      current.classList.remove(oldClasses[i].toLowerCase());
  }
  remove.value = "";
  showClasses();
}
remove.addEventListener("blur", removeClasses);
