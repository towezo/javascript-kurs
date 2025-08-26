const defaultResult = 0;
let currentResult = defaultResult;
logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber} `;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationId, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: operationNum,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  if (isNaN(enteredNumber)) {
    alert("Eingabe ist keine Nummer");
    userInput.value = 0;
  } else createAndWriteOutput(initialResult, "+", enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
  clearInput();
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  if (isNaN(enteredNumber)) {
    alert("Eingabe ist keine Nummer");
    userInput.value = 0;
  } else createAndWriteOutput(initialResult, "-", enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
  clearInput();
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  if (isNaN(enteredNumber)) {
    alert("Eingabe ist keine Nummer");
    userInput.value = 0;
  } else createAndWriteOutput(initialResult, "*", enteredNumber);

  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
  clearInput();
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  if (isNaN(enteredNumber)) {
    alert("Eingabe ist keine Nummer");
    userInput.value = 0;
  } else createAndWriteOutput(initialResult, "/", enteredNumber);

  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
  clearInput();
}

function clearInput() {
  userInput.value = "";
  console.log(userInput.value);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clearInput);

console.log();
