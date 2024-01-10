const equal = document.querySelector(".btn-operation-equal");
const operations = document.querySelectorAll(".btn-operation");
const numbers = document.querySelectorAll(".btn-number");
let outputFirst = document.querySelector(".output-first");
let outputSecond = document.querySelector(".output-secondary");

function calculator() {
  let firstNumber = "";
  let secondNumber = "";
  let operation = "";
  let result = 0;

  const resetCalculator = () => {
    firstNumber = "";
    secondNumber = "";
    operation = "";
  };
  const inputNumber = (number) => {
    if (!operation) {
      firstNumber += number;
    } else {
      secondNumber += number;
    }

    return (outputFirst.textContent =
      firstNumber + "" + operation + "" + secondNumber);
  };
  const opfunction = (op) => {
    operation = op;
    secondNumber = firstNumber;
    outputSecond.textContent = secondNumber + operation;
    firstNumber = "";
    secondNumber = "";
    operation = "";
    outputFirst.textContent = "";
  };
  const logicOperation = () => {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operation) {
      case "+":
        result = secondNumber + firstNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          displayError("Cannot divide by 0");
          return;
        }
        result = firstNumber / secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      default:
        result = 0;
    }
    return result;
  };
  const displayError = (errorMessage) => {
    outputFirst.textContent = errorMessage;
    outputSecond.textContent = "";
  };

  console.log(firstNumber, secondNumber, operation);
  return {
    resetCalculator,
    inputNumber,
    opfunction,
    logicOperation,
  };
}
const logic = calculator();

let currentInput = "";
numbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    const value = e.target.value;
    logic.inputNumber(value);
  });
});
operations.forEach((el) => {
  el.addEventListener("click", function (e) {
    const value = e.target.textContent;
    logic.opfunction(value);
  });
});
equal.addEventListener("click", function () {
  result = logic.logicOperation();
  outputFirst.textContent = result;
  outputSecond.textContent = "";
  logic.resetCalculator();
});
