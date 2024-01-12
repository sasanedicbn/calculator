const equal = document.querySelector(".btn-operation-equal");
const operations = document.querySelectorAll(".btn-operation");
const numbers = document.querySelectorAll(".btn-number");
const deleteBtn = document.querySelector(".btn-delete");
const clearBtn = document.querySelector(".btn-clear");
const dotBtn = document.querySelector(".btn-dot");
let outputFirst = document.querySelector(".output-first");
let outputSecond = document.querySelector(".output-secondary");

function calculator() {
  let firstNumber = "";
  let secondNumber = "";
  let operation = "";
  let result = null;

  const resetCalculator = () => {
    firstNumber = "";
    secondNumber = "";
    operation = "";
  };

  const inputNumber = (number) => {
    if (!operation || (operation && !secondNumber)) {
      firstNumber += number;
    } else if (operation && secondNumber) {
      firstNumber += number;
    }
    return (outputFirst.textContent = firstNumber);
  };
  const setOperation = (op) => {
    if (result !== null) {
      firstNumber = result.toString();
      result = null;
    }
    if (secondNumber !== "") {
      logicOperation();
      secondNumber = result.toString();
      result = null;
    }

    secondNumber = firstNumber;
    firstNumber = "";
    operation = op;
    outputSecond.textContent = secondNumber + operation;
    outputFirst.textContent = "";
  };
  const operations = {
    add: (a, b) => a + b,
    subtraction: (a, b) => b - a,
    divide: (a, b) => b / a,
    multiplication: (a, b) => a * b,
  };

  function logicOperation() {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operation) {
      case "+":
        result = operations.add(firstNumber, secondNumber);
        break;
      case "-":
        result = operations.subtraction(firstNumber, secondNumber);
        break;
      case "/":
        if (secondNumber === 0) {
          displayError("Cannot divide by 0");
          return;
        }
        result = operations.divide(firstNumber, secondNumber);
        break;
      case "*":
        result = operations.multiplication(firstNumber, secondNumber);
        break;
      default:
        return;
    }

    console.log("first num:", firstNumber);
    console.log("first sec:", secondNumber);
    console.log("first operator:", operation);
    firstNumber = result;
    secondNumber = "";
    operation = "";
  }
  const displayUX = (firstOutput, secondOutput) => {
    outputFirst.textContent = firstOutput;
    outputSecond.textContent = secondOutput;
  };
  const displayError = (errorMessage) => {
    outputFirst.textContent = errorMessage;
    outputSecond.textContent = "";
  };
  const deleteOneElement = () => {
    if (firstNumber.length > 0) {
      firstNumber = firstNumber.slice(0, -1);
    }
  };
  const inputDecimal = () => {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
    }
  };

  const getNum1 = () => firstNumber;
  const getNum2 = () => secondNumber;
  const getOperation = () => operation;
  const getResult = () => result;

  return {
    getResult,
    getNum1,
    getNum2,
    getOperation,
    resetCalculator,
    inputNumber,
    setOperation,
    logicOperation,
    deleteOneElement,
    displayUX,
    inputDecimal,
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
    logic.setOperation(value);
  });
});
equal.addEventListener("click", function () {
  result = logic.logicOperation();
  logic.displayUX(logic.getResult(), "");
  logic.resetCalculator();
});
clearBtn.addEventListener("click", function () {
  logic.resetCalculator();
  logic.displayUX();
});
deleteBtn.addEventListener("click", function () {
  logic.deleteOneElement();
  logic.displayUX(logic.getNum1(), outputSecond.textContent);
});
dotBtn.addEventListener("click", function () {
  logic.inputDecimal();
  logic.displayUX(logic.getNum1());
});
