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
//==========================
// Get the necessary HTML elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Function to display a message in the chat window
function displayMessage(message, isUser = false) {
  const li = document.createElement('li');
  li.textContent = message;
  if (isUser) {
    li.classList.add('user');
  }
  chatMessages.appendChild(li);
  // Scroll to the bottom of the chat window
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for user input
userInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const userMessage = userInput.value;
    displayMessage(userMessage, true);

    // Send the user message to the backend and receive the chatbot response
    // Replace <YOUR_BACKEND_API_URL> with your actual backend API endpoint
    fetch('<YOUR_BACKEND_API_URL>', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
      const chatbotResponse = data.response;
      displayMessage(chatbotResponse);
    })
    .catch(error => {
      displayMessage('Oops! Something went wrong.');
      console.error(error);
    });

    userInput.value = ''; // Clear the input field after sending the message
  }
});
