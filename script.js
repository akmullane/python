// script.js
const form = document.getElementById('calculator-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const num1 = form.elements.num1.value;
  const num2 = form.elements.num2.value;

  // Send a POST request to the server
  fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ num1, num2 })
  })
  .then(response => response.json())
  .then(data => {
    // Display the result on the HTML page
    resultElement.textContent = `Result: ${data.result}`;
  });
});