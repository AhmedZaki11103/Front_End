let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
// finalArr = [arrTwo.pop(),arrOne.reverse() , arrTwo.reverse()]
finalArr = arrTwo.pop().concat(",",arrOne.reverse(),",", arrTwo.reverse());
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
