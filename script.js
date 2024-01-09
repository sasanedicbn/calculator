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
    secondNumber = firstNumber;
    operation = op;
    outputSecond.textContent = secondNumber + operation;
    firstNumber = "";
    secondNumber = "";
    operation = "";
    outputFirst.textContent = "";
  };
  const logicOperation = (operation) => {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch (operation) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "/":
        return firstNumber / secondNumber;
      case "*":
        return firstNumber * secondNumber;
    }
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
  // logic.resetCalculator();
});
