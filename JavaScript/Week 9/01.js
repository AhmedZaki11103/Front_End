function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    zName = `Hello ${zName.slice(0, zName.indexOf(" "))} ${zName
      .slice(zName.indexOf(" ") + 1, zName.indexOf(" ") + 2)
      .toUpperCase()}.`;
    return zName;
  }
  function ageWithMessage(zAge) {
    zAge = `Your Age Is ${parseInt(zAge)}`;
    return zAge;
  }
  function countryTwoLetters(zCountry) {
    zCountry = `You Live In ${(zCountry[0] + zCountry[1]).toUpperCase()}`;
    return zCountry;
  }

  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}.`;
  }
  return fullDetails(); // Do Not Edit This
}
console.log();

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
