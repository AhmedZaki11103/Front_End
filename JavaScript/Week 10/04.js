let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let negativeNums = numsAndStrings
  .filter((el) => typeof el === "number")
  .map((el) => -el)
  .join();
console.log(negativeNums);
// [-1, -10, 10, 20, -5, -3]
