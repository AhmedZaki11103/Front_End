let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let [
  {
    title: t,
    age: a,
    available: av,
    skills: [, s],
  },
  {
    title: t2,
    age: a2,
    available: av2,
    skills: [, s2],
  },
  {
    title: t3,
    age: a3,
    available: av3,
    skills: [, s3],
  },
] = myFriends;
switch (chosen) {
  case 1:
    console.log(t);
    console.log(a);
    av ? console.log("Available") : console.log("Not Available");
    console.log(s);
    break;
  case 2:
    console.log(t2);
    console.log(a2);
    av2 ? console.log("Available") : console.log("Not Available");
    console.log(s2);
    break;
  case 3:
    console.log(t3);
    console.log(a3);
    av3 ? console.log("Available") : console.log("Not Available");
    console.log(s3);
    break;
}
// If chosen === 1
// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2
// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3
// "Sayed"
// 33
// "Available"
// "Laravel"
