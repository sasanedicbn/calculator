const equal = document.querySelector(".btn-operation-equal");
const operation = document.querySelectorAll(".btn-operation");
const numbers = document.querySelectorAll(".btn-number");

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
    return firstNumber + " " + operation + " " + secondNumber;
  };

  const opfunction = (op) => {
    if (!firstNumber && !secondNumber && !operation) {
      //   firstNumber += input
    } else if (operation) {
      firstNumber = secondNumber;
      operation = op;
      firstNumber = "";
    } else if (!firstNumber && operation && secondNumber) {
      // popuni firstnumber
    } else if (firstNumber && secondNumber && operation) {
      //    neka fun sto bi mogla result izracunati
    }
  };
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

    // ovdje treba da prvi = drugi pa da se 1 onda ocisti kao onaj gore uslov gdje operation
  });
});
console.log(currentInput);
