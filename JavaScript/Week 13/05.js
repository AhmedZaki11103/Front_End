let children = document.querySelector(".a5");
console.log(children);
children.addEventListener("click", function (event){
  let child = event.target;
  console.log(child.tagName)
})
