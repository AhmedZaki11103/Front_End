let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let num = letter.length;
let i = letter.length - letter.length;

for (; i < friends.length; i++) {
  if (friends[i][letter.length - letter.length] === letter.toUpperCase())
    continue;
  console.log(`${num} => ${friends[i]}`);
  num++;
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
