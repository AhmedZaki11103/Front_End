let mySet = new Set([10]);
mySet.add(20).add(mySet.size);
console.log(mySet);
console.log(mySet.size -1);
// Needed Output
// Set(3) {10, 20, 2}
// 2
