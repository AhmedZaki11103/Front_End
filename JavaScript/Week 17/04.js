let theNumber = 100020003000;
// let mySet = [...new Set(theNumber.toString())];
// console.log(+mySet.sort().join(""));

console.log(+[...new Set(theNumber.toString())].sort().join(""));
// Needed Output
// 123
