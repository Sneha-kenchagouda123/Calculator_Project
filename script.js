function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
      display.value = Math.sqrt(eval(display.value));
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  function calculatePower() {
    const base = prompt('Enter the base:');
    const exponent = prompt('Enter the exponent:');
    const display = document.getElementById('display');
    try {
      display.value = Math.pow(base, exponent);
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  function calculateTrig(func) {
    const display = document.getElementById('display');
    try {
      const value = eval(display.value);
      if (func === 'sin') display.value = Math.sin(value);
      if (func === 'cos') display.value = Math.cos(value);
      if (func === 'tan') display.value = Math.tan(value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  document.addEventListener('keydown', (event) => {
    const key = event.key; // Get the key pressed
    const display = document.getElementById('display');
  
    // Map keys to calculator functionality
    if (!isNaN(key)) {
      // If the key is a number, append it to the display
      appendValue(key);
    } else if (key === '+') {
      appendValue('+');
    } else if (key === '-') {
      appendValue('-');
    } else if (key === '*') {
      appendValue('*');
    } else if (key === '/') {
      appendValue('/');
    } else if (key === '.') {
      appendValue('.');
    } else if (key === '(') {
      appendValue('(');
    } else if (key === ')') {
      appendValue(')');
    } else if (key === 'Enter') {
      // 'Enter' key for "="
      calculate();
      event.preventDefault(); // Prevent form submission if any
    } else if (key === 'Backspace') {
      // 'Backspace' key to delete the last character
      deleteLast();
    } else if (key.toLowerCase() === 'c') {
      // 'C' key to clear the display
      clearDisplay();
    } else if (key.toLowerCase() === 'r') {
      // 'R' key to calculate square root
      calculateSquareRoot();
    } else if (key.toLowerCase() === 'p') {
      // 'P' key for power calculation
      calculatePower();
    } else if (key.toLowerCase() === 's') {
      // 'S' key for sine calculation
      calculateTrig('sin');
    } else if (key.toLowerCase() === 'o') {
      // 'O' key for cosine calculation
      calculateTrig('cos');
    } else if (key.toLowerCase() === 't') {
      // 'T' key for tangent calculation
      calculateTrig('tan');
    }
  });

  function calculatePercentage() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value) / 100; // Divide the current value by 100
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  // Extend keyboard input for percentage
  document.addEventListener('keydown', (event) => {
    const key = event.key; // Get the key pressed
    
    if (key === '%') {
      calculatePercentage();
    }
  });

  // Highlight effect for button press
function animateButton(button) {
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 200);
}

// Modify existing onclick handlers to include animation
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => animateButton(button));
});

