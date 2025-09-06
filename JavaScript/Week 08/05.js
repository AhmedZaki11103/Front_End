function createSelectBox(startYear, endYear) {
  // Your Code Here

  document.writeln(` <div> <select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.writeln(`<option value="${i}">${i}</option>`);
  }
  document.writeln(`</select></div>`);
}
createSelectBox(2000, 2021);
