// Toggle Stylesheets
const toggleButtons = document.querySelectorAll('input[type="radio"]');
// toggleButtons.forEach(toggleButton => {
//     toggleButton.addEventListener('change', toggleClickOutcome)
//     themeName = toggleButton.getAttribute('id')
//     console.log('themename: ' + themeName)
// })

for (i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('input', function() {
        themeName = this.id
        console.log('theme name: ' + themeName)
        toggleClickOutcome()
    })
}


function toggleClickOutcome() {
    switch (themeName) {
        case 'theme-1':
            console.log('theme-1')
            document.querySelector('#stylesheet-1').disabled = false
            document.querySelector('#stylesheet-2').disabled = true
            document.querySelector('#stylesheet-3').disabled = true
            break;

        case 'theme-2':
            console.log('theme-2')
            document.querySelector('#stylesheet-1').disabled = true
            document.querySelector('#stylesheet-2').disabled = false
            document.querySelector('#stylesheet-3').disabled = true
            break;

        case 'theme-3':
            console.log('theme-3')
            document.querySelector('#stylesheet-1').disabled = true
            document.querySelector('#stylesheet-2').disabled = true
            document.querySelector('#stylesheet-3').disabled = false
            break;
    
        default:
            break;
    }
}


// Define the input and output
const answerDisplay = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const deleteButton = document.getElementById("delete");
const resetButton = document.getElementById("reset");
const equalsButton = document.getElementById("equals");
let startSecondOperand = false;
let firstOperandArray = [];
let secondOperandArray = [];
let firstOperand = '';
let secondOperand = '';
let selectedOperator = '';


// Make a true false switch for first and second operand that sets second operand to true when operator is clicked

// Get the first set of numbers to form




// Change operand
function detectFirstOrSecond() {
    if (startSecondOperand === false) {
        firstOperandArray.push(this.value)
        firstOperand = firstOperandArray.join('')
        console.log(firstOperand)
        answerDisplay.innerHTML = firstOperand
    } else if (startSecondOperand === true) {
        secondOperandArray.push(this.value)
        secondOperand = secondOperandArray.join('')
        console.log(secondOperand)
        answerDisplay.innerHTML = secondOperand
    }
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', detectFirstOrSecond)
})



// Detect click of operator button
// On click, store the array as a number and start a new array
// NEED CONDITIONAL TO HANDLE NEGATIVE NUMBERS
operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', getOperator)
})

// Operator is clicked, get the value
function getOperator() {
    selectedOperator = this.value
    console.log(selectedOperator)
    startSecondOperand = true
    answerDisplay.innerHTML = selectedOperator;
}




// Use switch statement to calculate total on click of equals button
function calculateTotal () {
    startSecondOperand = false
    firstOperandArray = [];
    secondOperandArray = [];
    
    console.log(selectedOperator)
    switch (selectedOperator) {
        case '+':
            firstOperand = Number(firstOperand) + Number(secondOperand)
            answerDisplay.innerHTML = firstOperand;
            break;
    
        case '-':
            firstOperand = Number(firstOperand) - Number(secondOperand)
            answerDisplay.innerHTML = firstOperand;
            break;
    
        case '*':
            firstOperand = Number(firstOperand) * Number(secondOperand)
            answerDisplay.innerHTML = firstOperand;
            break;
    
        case '/':
            firstOperand = Number(firstOperand) / Number(secondOperand)
            answerDisplay.innerHTML = firstOperand;
            break;
        default:
            break;
    }
}

equalsButton.addEventListener('click', calculateTotal)


// Clear button functionality
resetButton.addEventListener('click', () => {
    firstOperandArray = [];
    secondOperandArray = [];
    firstOperand = '';
    secondOperand = '';
    selectedOperator = '';
    startSecondOperand = false;
    answerDisplay.innerHTML = ''
})

// Delete button
deleteButton.addEventListener('click', () => {
    if (startSecondOperand === false) {
        firstOperandArray = firstOperandArray.slice(0, -1)
        firstOperand = firstOperandArray.join('');
        console.log(firstOperand);
        answerDisplay.innerHTML = firstOperand;
    }
    else if (startSecondOperand === true) {
        secondOperandArray = secondOperandArray.slice(0, -1)
        secondOperand = secondOperandArray.join('');
        console.log(secondOperand);
        answerDisplay.innerHTML = secondOperand
    }
})
