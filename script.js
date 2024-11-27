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
  