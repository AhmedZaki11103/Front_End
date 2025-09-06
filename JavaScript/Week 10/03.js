let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arr = myArray.reduce(function (acc, curr) {
  return acc + (typeof curr === "object" ? curr.join("") : curr);
});
console.log(arr);
// Elzero
