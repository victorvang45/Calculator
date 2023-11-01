let num1 = '';
let num2 = '';
let currOperand = null;
let hasOperand = false;

const currentOperationDisplay = document.querySelector('.curr-operation');
const prevOperationDisplay = document.querySelector('.previous-operation');
const numberPad = document.querySelectorAll('.number');
const operators = document.querySelectorAll('#operator');
const equals = document.querySelector('#equal');
const acButton = document.querySelector('#clear');
const cButton = document.querySelector('#delete');


acButton.addEventListener('click', () => clear());
cButton.addEventListener('click', () => deleteNumber());

equals.addEventListener('click', () => evaluate());
numberPad.forEach((button) => 
    button.addEventListener('click', () => displayNumber(button.textContent)));
operators.forEach((button) => 
    button.addEventListener('click', () => displayOperator(button.textContent)));


function clear() {
    currentOperationDisplay.textContent = '0';
    prevOperationDisplay.textContent = '';
    num1 = '';
    num2 ='';
    currOperand = null;
}


function deleteNumber() {
    currentOperationDisplay.textContent = currentOperationDisplay.textContent.slice(0,-1);
}
function displayNumber(number) {
    if(currOperand != null || currentOperationDisplay.textContent == 0) {
        currentOperationDisplay.textContent = '';
        hasOperand = false;
    }
    currentOperationDisplay.textContent += number;
}

function displayOperator(operand) {
    if(currOperand !== null) {
        evaluate();
    }
    num1 = currentOperationDisplay.textContent;
    currOperand = operand;
    prevOperationDisplay.textContent = num1 + ' ' + currOperand;
    hasOperand = true;
}

function evaluate() {
    if(currOperand === null || hasOperand) {
        return;
    }
    if(currOperand == '/' && currentOperationDisplay.textContent == 0) {
        alert('You cannot divide by zero!!')
    }
    num2 = currentOperationDisplay.textContent;
    currentOperationDisplay.textContent = Math.round(operate(num1, num2, currOperand) * 1000) / 1000;
    prevOperationDisplay.textContent = num1 + ' ' + currOperand + ' ' + num2 + ' =';
    currOperand = null;
}
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function plusminus(num1) {
    return num1 * -1 ;
}

function percent(num1) {
    return num1 / 100; 
}


function operate(num1, num2, operand) {
    num1 = Number(num1);
    num2 = Number (num2);
    switch(operand) {
        case '+':
            return add(num1,num2);
        case'-':
            return subtract(num1,num2);
        case 'x':
            return multiply(num1,num2);
        case '/':
            if (num2 == 0) {
                return null;

            } else {
                return divide(num1,num2);
            }
        default: 
            return null;
    }
    
}