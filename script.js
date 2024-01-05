const buttons = document.querySelectorAll("button");
function calculator() {
  let number1;
  let currentResult = 0;
  let operation;
  function add(number) {
    currentResult += number;
    console.log(`Result of add: ${currentResult}`);
  }

  return {
    add,
  };
}
const logic = calculator();

logic.add(10);
