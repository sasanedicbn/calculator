const buttons = document.querySelectorAll("button");
function calculator() {
  let number1;
  let currentResult = 0;
  let operation;
  function add(...numbers) {
    for (const number of numbers) {
      currentResult += number;
    }
    console.log(`Result: ${currentResult}`);
  }
  function subtract(...numbers) {
    for (const number of numbers) {
      currentResult -= number;
    }
    console.log(`Result of subtract: ${currentResult}`);
  }
  function multiply(...numbers) {
    currentResult *= number;
    console.log(`Result of subtract: ${currentResult}`);
  }
  function divide(numbers) {
    for (const number of numbers) {
      if (number !== 0) {
        currentResult /= number;
      }
    }
    console.log(`Result of subtract: ${currentResult}`);
  }
  return {
    add,
    subtract,
    multiply,
    divide,
  };
}
const logic = calculator();

logic.add(4 + 4);
