const defaultResult = 0;

let currentResult = defaultResult;
let calcHistory = [];

function getUserInputValue() {
  return parseInt(userInput.value);
}

function createOutput(operat) {
    // Likewise goes OR operator
  if (operat !== "+" && operat !== "-" && operat !== "*" && operat !== "/") {
    return;
  } else {
    const enteredValue = getUserInputValue();
    if (operat === "+") {
      currentResult = currentResult + enteredValue;
    } else if (operat === "-") {
      currentResult = currentResult - enteredValue;
    } else if (operat === "*") {
      currentResult = currentResult * enteredValue;
    } else {
      currentResult = currentResult / enteredValue;
    }
    const calculationDescription = `${currentResult} ${operat} ${enteredValue}`;
    calcHistory.push(calculationDescription);
    outputResult(currentResult, calculationDescription);
  }
}

function add() {
  createOutput("+");
}

function sub() {
  createOutput("-");
}

function mul() {
  createOutput("*");
}

function div() {
  createOutput("/");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
