const buttons = document.querySelectorAll("button");
function calculator() {
  let number1;
  let currentResult = 0;
  let operation;
  function add(...numbers) {
    for (const number of numbers) {
      currentResult += number;
    }
    return currentResult;
  }
  function subtract(...numbers) {
    console.log(...numbers);
    for (const number of numbers) {
      currentResult -= number;
    }
    return currentResult;
  }
  function multiply(...numbers) {
    currentResult = 1;
    console.log(numbers);
    for (const number of numbers) {
      currentResult *= number;
    }
    return currentResult;
  }
  function divide(...numbers) {
    for (const number of numbers) {
      if (number !== 0) {
        currentResult /= number;
      }
    }
    return currentResult;
  }
  return {
    add,
    subtract,
    multiply,
    divide,
  };
}
const logic = calculator();

const result = logic.subtract(10, 3);
console.log(result);
// logic.divide(8, 2);
// logic.subtract(12, 2);
