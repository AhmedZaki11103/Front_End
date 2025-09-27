let dateBefore = new Date();

for (let i = 0; i < 100000; i++) {
  let div = document.createElement("div");
  div.innerHTML = i;
  document.body.appendChild(div);
}

let dateAfter = new Date();

console.log(`Loop Took ${dateAfter - dateBefore} Milliseconds.`);
// Needed Output
// "Loop Took 1921 Milliseconds."
