let myAdmins = ["Ahmed", "Osama", "Sayde", "Stop", "Hekhaa"];
let realAdmins = [];
let myEmployees = [
  "Amgad",
  "Sameh",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let countOfAdmins = 0;
for (let i = countOfAdmins; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  } else {
    realAdmins.push(myAdmins[i]);
    countOfAdmins++;
  }
}
document.writeln(`<div>We Have ${countOfAdmins} Admins</div> <hr>`);

for (let i = 0; i < realAdmins.length; i++) {
  document.writeln(`<div>
  The Admin For Team [${i + 1}] Is <span style= "font-size: 20px; color: red;">${
    realAdmins[i]
  }</span>
  <h3>Team Members: </h3>`);
  let memberCount = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.writeln(`<p>${memberCount}- ${myEmployees[j]}</p>`);
      memberCount++;
    }
  }
  document.writeln(`</div><hr>`);
}
