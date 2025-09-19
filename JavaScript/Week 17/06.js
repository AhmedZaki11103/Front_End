// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

// let charsN = chars.sort(); // عشان الأرقام تيجي في الأول
// let counter = 0;
// charsN.forEach((e) => typeof e === "number" && counter++);
// && معناها لو اللي قبلها صح اعمل كذا, عشان الطريقة المختصرة الطبيعية منفعتش
// console.log(counter);

// charsN.copyWithin(0, counter,counter*2);
// console.log(charsN);
// =======================================================================
//  الكود اللي فوق شغال بس ال sort بيعمل سورت للحروف كمان وده مينفعش في الحالة التالتة

let nums = chars.filter((e) => typeof e === "number");
let letters = chars.filter((e) => typeof e !== "number");
let result = [...nums, ...letters];
console.log(result);

result.copyWithin(0, nums.length, nums.length * 2);
console.log(result);
