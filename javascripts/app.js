var number = [];
var num1 = 0;
var num2 = 0;
var operator;
var result = 0;
var results = document.getElementById('result');

function submitNumber() {
  var args = arguments[0];
  setResults(args);
}

function setResults(args) {
  number.push(args);
  num1 = Number(number.join(''));
  displayResults(num1);
}

function displayResults(total) {
  results.innerHTML = total;
}

function getOperator() {
  operator = arguments[0];
  clearNumber();
  setNumber();
  results.innerHTML = operator;
}

function setNumber() {
  num2 = (result + num1);
  num1 = null;    
}

function sum() {
  if (operator == '+') {
    result = (num1 + num2);
  } else if (operator == '-') {
    result = (num1 - num2);
  } else if (operator == '/') {
    result = (num2 / num1);
  } else if (operator == '*') {
    result = (num1 * num2);
  }
  operator = null;
  num1 = null;
  num2 = null;
  clearNumber();
  displayResults(result);

}

function clearNumber() {
  number = [];
}

function clearAll() {
  result = 0;
  number = [];
  num1 = 0;
  operator = null;
  displayResults(result);
}

displayResults(result);