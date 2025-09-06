let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.indexOf("JS") != -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (haystack.lastIndexOf("JS") != -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (haystack.includes("JS")) {
  console.log("Found");
} else {
  console.log("Not Found");
}
