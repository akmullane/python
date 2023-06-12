// script.js
document.addEventListener('DOMContentLoaded', () => {
  const calculateBtn = document.getElementById('calculate-btn');
  calculateBtn.addEventListener('click', calculate);
});

function calculate() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const resultElement = document.getElementById('result');
  
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  
  const result = num1 + num2;
  resultElement.textContent = ` ${result}`;
}
