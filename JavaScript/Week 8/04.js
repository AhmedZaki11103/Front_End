function checkStatus(a, b, c) {
  // Your Code Here
  let arr = [a, b, c];
  let age, name, job;
  for (let i = 0; i < 3; i++) {
    if (typeof arr[i] === "number") {
      age = arr[i];
    } else if (typeof arr[i] === "string") {
      name = arr[i];
    } else {
      job = arr[i];
    }
  }
  document.writeln(`<div>Hello ${name}, Your Age Is ${age},`);
  if (job) {
    document.writeln(`You Are Available For Hire.`);
  } else {
    document.writeln(`You Are Not Available For Hire.`);
  }
  document.writeln(`</div>`);
}

// Needed Output
checkStatus("Osama 1", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama 2", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama 3"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama 4", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
