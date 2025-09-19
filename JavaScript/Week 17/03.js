let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoInMap = new Map([
  ["name", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]);
console.log(myInfoInMap);
console.log(myInfoInMap.size);
console.log(myInfoInMap.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
