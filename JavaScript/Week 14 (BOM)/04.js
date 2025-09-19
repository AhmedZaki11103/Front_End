let counter = document.querySelector(".counter");
setInterval(() => {
  // console.log(counter.innerHTML);
  if (counter.innerHTML === "0") {
    clearInterval(counter);
    location.assign("https://elzero.org/");
  } else {
    counter.innerHTML -= 1;
  }
}, 1000);
