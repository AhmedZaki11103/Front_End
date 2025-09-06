let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let x = arr1.pop();
let y = arr2.pop();
let f = arr2.pop();
allArrs = (f + x + y).toLowerCase();
console.log(allArrs); // fxy