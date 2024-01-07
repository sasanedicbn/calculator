const equal = document.querySelector(".btn-operation-equal");
const numbers = document.querySelectorAll(".btn");

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

  return {
    resetCalculator,
    inputNumber,
    opfunction,
  };
}
numbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    const operation = e.target.value;
    console.log(operation);
  });
});
const logic = calculator();

// console.log(logic.inputNumber(2));
// console.log(logic.opfunction("+"));
// console.log(logic.inputNumber(6));
// //
// logic.inputNumber("+");
// console.log(logic.inputNumber(2));
// console.log(logic.inputNumber(4));
