let images = document.querySelectorAll("img");
console.log(images);

for (let i = 0; i < images.length; i++) {
  if (images[i].hasAttribute("alt")) {
    images[i].alt = "old";
  } else {
    images[i].alt = "Zaki New";
  }
}
