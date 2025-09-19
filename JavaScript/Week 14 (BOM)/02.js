let box = document.querySelector(".box");
let btn = document.querySelector("button");
function T() {
  box.style.display = "block";
}
setTimeout(T, 5000);
btn.onclick = function () {
  box.style.display = "none";
};
