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

  return {
    resetCalculator,
    inputNumber,
  };
}

const logic = calculator();

console.log(logic.inputNumber(2));
console.log(logic.inputNumber(6));
logic.inputNumber("-");
console.log(logic.inputNumber(6));
