let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}
console.log(swappedName);
console.log(result);

// Output
// "ELzERo"
