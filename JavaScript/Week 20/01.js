let birthday = new Date("1-11-2003");
let date = new Date();
let myAge = date - birthday;

console.log(Number.parseInt(myAge / 1000) + " Seconds");
console.log(Number.parseInt(myAge / 1000 / 60) + " Minutes");
console.log(Number.parseInt(myAge / 1000 / 60 / 60) + " Hours");
console.log(Number.parseInt(myAge / 1000 / 60 / 60 / 24) + " Days");
console.log(Number.parseInt(myAge / 1000 / 60 / 60 / 24 / 30) + " Months");
console.log(Number.parseInt(myAge / 1000 / 60 / 60 / 24 / 30.2 / 12) + " Years");

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"
