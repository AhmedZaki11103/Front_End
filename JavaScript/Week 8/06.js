function multiply(...nums) {
  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      result *= Math.trunc(nums[i]);
    }
  }
  document.writeln(`${result} <br>`);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
