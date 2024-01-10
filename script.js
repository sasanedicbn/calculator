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
  let result = 0;

  const resetCalculator = () => {
    firstNumber = "";
    secondNumber = "";
    operation = "";
  };
  const inputNumber = (number) => {
    if (!operation) {
      firstNumber += number;
    }
    // console.log(firstNumber, secondNumber);
    return (outputFirst.textContent =
      firstNumber + "" + operation + "" + secondNumber);
  };
  const setOperation = (op) => {
    operation = op;
    secondNumber = firstNumber;
    console.log(firstNumber, secondNumber, operation);
    firstNumber = "";
    secondNumber = "";
    operation = "";

    outputSecond.textContent = secondNumber + operation;
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
  const deleteOneElement = () => {
    firstNumber = firstNumber.slice(0, -1);
  };
  const getNum1 = () => firstNumber;
  const getNum2 = () => secondNumber;
  const getOperation = () => operation;
  console.log(firstNumber, secondNumber, operation);
  return {
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
    console.log("prvi broj: ", logic.getNum1());
    console.log("drugi broj: ", logic.getNum2());
    console.log("operacija: ", logic.getOperation());
  });
});
equal.addEventListener("click", function () {
  result = logic.logicOperation();
  outputFirst.textContent = result;
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
