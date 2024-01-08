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
    firstNumber = secondNumber;
    operation = op;
    outputSecond.textContent = secondNumber + operation;
    firstNumber = "";
    outputFirst.textContent = "";
  };

  // const opfunction = (op) => {

  //   if (!firstNumber && !secondNumber && !operation) {
  //     //   firstNumber += input
  //   } else if (operation) {
  //     firstNumber = secondNumber;
  //     operation = op;
  //     firstNumber = "";
  //   } else if (!firstNumber && operation && secondNumber) {
  //     // popuni firstnumber
  //   } else if (firstNumber && secondNumber && operation) {
  //     //    neka fun sto bi mogla result izracunati
  //   }
  // };

  console.log(firstNumber, secondNumber, operation);
  return {
    resetCalculator,
    inputNumber,
    opfunction,
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

console.log(currentInput);
