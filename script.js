function calculator() {
  let firstNumber = "";
  let secondNubmer = "";
  let operation = "";
  let result = 0;

  const resetCalculator = () => {
    let firstNumber = "";
    let secondNubmer = "";
    let operation = "";
  };
  const inputNumber = (number) => {
    if (!operation) {
      firstNumber += parseFloat(number);
    } else {
      secondNubmer += parseFloat(number);
    }
  };

  return {
    resetCalculator,
  };
}
