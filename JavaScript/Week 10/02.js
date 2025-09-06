let myString = "EElllzzzzzzzeroo";

let x = myString
  .split("")
  .filter(function (el, i, myString) {
    return myString[i] != myString[i+1] ;
  })
  .join("");
console.log(x);
// Elzero
