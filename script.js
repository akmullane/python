// // script.js
// function calculate() {
//   const num1 = parseInt(document.getElementsByName('num1')[0].value);
//   const num2 = parseInt(document.getElementsByName('num2')[0].value);
//   const result = num1 + num2;
//   document.getElementById('result').textContent = `${result}`;
// }



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
  
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = 'Invalid input';
    return;
  }
  
  const result = num1 + num2;
  resultElement.textContent = `Result: ${result}`;
}
