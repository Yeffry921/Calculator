const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) =>{
    if(num1 === 0|| num2 === 0){
        return 'Error, can\'t divide by zero';
    }
    return num1 / num2;
} 

const operation = (operand, num1, num2) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2)
    if (operand === '+') {
        return add(num1, num2)
    } else if (operand === '-') {
        return subtract(num1, num2)
    } else if (operand === '*') {
        return multiply(num1, num2)
    } else if (operand === '/') {
        return divide(num1, num2)
    }
};

const clearDisplay = (storeVal, displayValue) => {
    storeVal.first = '';
    storeVal.operand = '';
    storeVal.second = '';
    storeVal.result = '';
    storeVal.decimal = '';
    displayValue.value = '';
};

const multipleOperands = (storeVal, e) => {
    storeVal.result = operation(storeVal.operand, storeVal.first, storeVal.second);
    storeVal.first = storeVal.result;
    storeVal.operand = e.target.value;
    storeVal.second = '';
};

let displayValue = document.querySelector('.output');
displayValue.value = '';

const storeVal = {
    first: '',
    second: '',
    operand: '',
    result: '',
    decimal: ''
};

document.querySelectorAll('button').forEach((number) => {
    number.addEventListener('click', (e) => {

        //store the first number to be operated when there is no operand yet
        if (e.target.classList.contains('number') && storeVal.operand === '') {
            storeVal.first += e.target.value;
            displayValue.value = storeVal.first;
        }

        if (e.target.classList.contains('operand')) { 
            if (storeVal.first && storeVal.operand && storeVal.second) {
                multipleOperands(storeVal, e);
                displayValue.value = storeVal.result + storeVal.operand;

            } else {
                storeVal.operand = e.target.value;
                displayValue.value = storeVal.first + storeVal.operand;

            }
        //store the second number when there is an operand
        } else if (e.target.classList.contains('number') && storeVal.operand !== '') { 
            storeVal.second += e.target.value;
            displayValue.value = storeVal.first + storeVal.operand + storeVal.second;

        } else if (e.target.value === '=' && storeVal.first && storeVal.operand && storeVal.second) {
            displayValue.value = operation(storeVal.operand, storeVal.first, storeVal.second);

        } else if (e.target.value === 'C') {
            clearDisplay(storeVal, displayValue);

        } 
    })
});