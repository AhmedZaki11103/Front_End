let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let result = numsOne.concat(numsTwo);
let result2 = [...numsOne, ...numsTwo];
let result3 = (numsOne.join("") + numsTwo.join("")).split("").map((e) => +e);
console.log(result);
console.log(result2);
console.log(result3);
// Needed Output
// [1, 2, 3, 4, 5, 6]
