let btn = document.querySelector("input[type= 'submit']");
let text = document.querySelector("input[type= 'text']");
let num = document.querySelector("input[type= 'number']");
let select = document.querySelector("form select");
let results = document.getElementsByClassName("results")[0];
console.log(results);
let flage = false;

btn.onclick = function (e) {
  e.preventDefault();

  if (flage === true) {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
  }
  for (let i = 0; i < num.value; i++) {
    let Element = document.createElement("div");
    Element.innerHTML = `${text.value} ${i + 1}`;
    Element.className = "Box";
    Element.title = "Element";
    Element.id = `id-${i + 1}`;
    if (select.value === "Section") {
      Element.style.backgroundColor = "#009589";
    }
    results.appendChild(Element);
  }
  flage = true;
};
