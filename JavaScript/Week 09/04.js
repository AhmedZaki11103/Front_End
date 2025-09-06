function specialMix(...data) {
  // Your Code Here
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      result += data[i];
    } else if (typeof data[i] === "string") {
      if (Number.isInteger(parseInt(data[i]))) {
        result += parseInt(data[i]);
      } else {
        continue;
      }
    } else {
      return `NaN | Zaki`;
    }
  }
  if (result === 0) return `All Is Strings`;
  return result;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("10Testing", "Cooool", "10Testing", "60Cool", "20Cool")); //100 
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
