// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use eval carefully!
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Allow number keys, arithmetic operators, and backspace
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    }

    // Handle equal sign
    if (key === 'Enter') {
        calculateResult();
    }

    // Handle clear
    if (key === 'Backspace') {
        clearDisplay();
    }

    // Handle clearing the display if Escape is pressed
    if (key === 'Escape') {
        clearDisplay();
    }

    // Prevent default behavior for keys we want to capture
    event.preventDefault();
});
