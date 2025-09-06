// let mix = "A13BS2ZX";

// let nums = mix
//   .split("")
//   .filter(function (el) {
//     return Number(el);
//   })
//   .map(function (ele) {
//     return ele*ele;
//   })
//   .join("");
// console.log(nums);
// =====================================================

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix
  .map(function (el) {
    return typeof el === "number" ? "" : el;
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  } );
console.log(letters);
// Elzero
