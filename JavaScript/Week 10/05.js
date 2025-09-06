let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, curr) {
  return curr % 2 === 0 ? acc * curr : acc + curr;
}, 1);

console.log(result)
// 500
