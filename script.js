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
  function subtract(number) {
    currentResult -= number;
    console.log(`Result of subtract: ${currentResult}`);
  }
  function multiply(number) {
    currentResult *= number;
    console.log(`Result of subtract: ${currentResult}`);
  }
  function divide(number) {
    if (number !== 0) {
      currentResult /= number;
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
