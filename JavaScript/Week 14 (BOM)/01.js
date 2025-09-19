let nums = window
  .prompt("Print Number From – To", "Example: 5-20")
  .split("-")
  .sort((a, b) => a - b);
// let nums = [10, 20, 25, 5, 6, 2, 8];
console.log(nums);
console.log(+nums[0]);
console.log(+nums[nums.length - 1]);

for (let i = nums[0]; i <= nums[1]; i++) {
  document.writeln(i + `</br>`);
}

// 10-15

// 10
// 11
// 12
// 13
// 14
// 15

// 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
