function calculate(firstNum, secondNum, operation) {
  if (operation === "multiply") {
    document.writeln(
      `${firstNum} X ${secondNum} = ${firstNum * secondNum} <br>`
    );
  } else if (operation === "subtract") {
    document.writeln(
      `${firstNum} - ${secondNum} = ${firstNum - secondNum} <br>`
    );
  } else if (secondNum === undefined) {
    document.writeln(`Second Number Not Found <br>`);
  } else if (operation === "add" || operation === undefined) {
    document.writeln(
      `${firstNum} + ${secondNum} = ${firstNum + secondNum} <br>`
    );
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
