// Define a variable to store the input element
const inputBox = document.getElementById('inputbox');

// Function to append text to the input box
function appendToInput(value) {
    inputBox.value += value;
}

// Function to clear the input box
function clearInput() {
    inputBox.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(inputBox.value);
        inputBox.value = result;
    } catch (error) {
        inputBox.value = 'Error';
    }
}