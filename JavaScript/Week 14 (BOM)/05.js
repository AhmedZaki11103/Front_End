let counter = document.querySelector(".counter");
function openelzero() {
  window.open(
    "https://elzero.org",
    "",
    "width=300,height=300,top=400,left=400"
  );
}

let countDown = setInterval(() => {
  // console.log(counter.innerHTML);
  if (counter.innerHTML === "0") {
    clearInterval(countDown);
  } else if (counter.innerHTML === "5") {
    openelzero();
    counter.innerHTML -= 1;
  } else {
    counter.innerHTML -= 1;
  }
}, 1000);
