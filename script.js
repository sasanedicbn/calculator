const equal = document.querySelector(".btn-operation-equal");
const operations = document.querySelectorAll(".btn-operation");
const numbers = document.querySelectorAll(".btn-number");
const deleteBtn = document.querySelector(".btn-delete");
const clearBtn = document.querySelector(".btn-clear");
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

    firstNumber = result;
    secondNumber = "";
    operation = "";
  }
  const displayError = (errorMessage) => {
    outputFirst.textContent = errorMessage;
    outputSecond.textContent = "";
  };
  const deleteOneElement = () => {
    firstNumber = firstNumber.slice(0, -1);
  };
  const getNum1 = () => firstNumber;
  const getNum2 = () => secondNumber;
  const getOperation = () => operation;
  const getResult = () => result;
  console.log(firstNumber, secondNumber, operation);
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
  outputFirst.textContent = logic.getResult();
  outputSecond.textContent = "";
  logic.resetCalculator();
});
clearBtn.addEventListener("click", function () {
  logic.resetCalculator();
  outputFirst.textContent = "";
  outputSecond.textContent = "";
});
deleteBtn.addEventListener("click", function () {
  logic.deleteOneElement();
  // diplay on screen
});
