console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: blue; font-size: 40px; background-color: blue; color:white;"
);
console.group("group one");
console.log("message 1");
console.log("message 2");
console.group("Child Group");
console.log("message 1");
console.log("message 2");
console.group("Grand Child Group");
console.log("message 1");
console.log("message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group two");
console.log("message 1");
console.log("message 2");
console.groupEnd();

console.table(["Ahmed", "Zaki", "Khaled"]);

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/