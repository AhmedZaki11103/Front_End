function ageInTime(theAge) {
  let result = theAge;
  if (theAge < 10 || theAge > 100) {
    console.log(`Age Out Of Range`);
  } else {
    console.log(`You Have: `);
    console.log(`${theAge} Years`);
    console.log(`${(result *= 12)} Months`);
    // console.log(`${result *= 4} Weeks`)
    console.log(`${(result *= 30)} Days`);
    console.log(`${result *= 24} Hours`);
    console.log(`${result *= 60} Minutes`);
    console.log(`${result *= 60} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
