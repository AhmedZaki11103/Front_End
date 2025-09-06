let numberOne = 10;
let numberTwo = 20;

// console.log(numberOne +""+ numberTwo)
// console.log(typeof(numberOne + numberTwo))

// Add Variables Here

// Ouput
console.log(String(numberOne) + String(numberTwo)); // Normal Concatenate => 1020
console.log(typeof (String(numberOne) + String(numberTwo))); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(String(numberTwo) + "\n" + String(numberOne));
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
