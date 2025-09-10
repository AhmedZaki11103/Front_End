links = document.links;
console.log(links);
for (let i = 0; i < links.length; i++) {
  if (links[i].classList.contains("open") && links[i].innerHTML === "Elzero") {
    window.onload = function () {
      links[i].click();
    };
  }
}
