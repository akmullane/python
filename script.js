// script.js
function calculate() {
  const num1 = parseInt(document.getElementsByName('num1')[0].value);
  const num2 = parseInt(document.getElementsByName('num2')[0].value);
  const result = num1 + num2;
  document.getElementById('result').textContent = `${result}`;
}
