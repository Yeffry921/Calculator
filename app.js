//the program has to know which button is clicked
//store the value of the button clicked
//the program has to make sure to account for chaining of operators
//the program has to display the result
//the program will need to process(resolve) the numbers clicked and operators
//finally the programm will display the result

//display -
// const add = (num1, num2) => num1 + num2;

// const subtract = (num1, num2) => num1 - num2;

// const multiply = (num1, num2) => num1 * num2;

// const divide = (num1, num2) => num1 / num2;

// const operation = (operand, num1, num2) => {

//     if (operand === '+') {
//         return add(num1, num2)
//     } else if (operand === '-') {
//         return subtract(num1, num2)
//     } else if (operand === '*') {
//         return multiply(num1, num2)
//     } else if (operand === '/') {
//         return divide(num1, num2)
//     }
// };



// let displayValue = document.querySelector('.output');


// const storeValues = {
//     first: '',
//     second: '',
//     operand: '',
//     result: ''
// };


// document.querySelectorAll('button').forEach((number) => {
//     number.addEventListener('click', (e) => {

//         // if (e.target.classList.contains('number') && storeValues.operand === '') {
//         //     displayValue.textContent = storeValues.number;
//         //     storeValues.number += e.target.value;


//         // } else if (e.target.classList.contains('number') && storeValues.operand !== '') {
//         //     storeValues.numberTwo += e.target.value;
//         //     storeValues.result = operation(storeValues.operand, parseInt(storeValues.number), parseInt(storeValues.numberTwo))
//         //     console.log(storeValues.result)
//         //     displayValue.textContent = storeValues.numberTwo;

//         // } else if (storeValues.number && storeValues.numberTwo){

//         // } else if (e.target.classList.contains('operand')) {
//         //     storeValues.operand = e.target.value;
//         //     displayValue.textContent = '';
//         //     if(storeValues.number){}


//         // } else if (e.target.value === 'C') {
//         //     displayValue.textContent = '';
//         //     storeValues.number = '';
//         //     storeValues.numberTwo = '';
//         //     storeValues.operand = '';
//         //     storeValues.result = 0;

//         // }

//         //store the first number to be operated
//         let firstNumber = '';
//         //store the operand to be used in operation
//         let operand = '';
//         //store the second number to be operated
//         let secondNumber = '';
//         //get back the result of the operation
//         let result = '';
//         //use the result of the operation as the first number to be operated
//         //store the operand to be used in the operation
//         //store the second numbers in the second number variable
//         //make sure to parse numbers into strings and vice versa


//         displayValue.textContent = storeValues.number + storeValues.operand + storeValues.numberTwo;


//         if (e.target.value === '=') {
//             displayValue.textContent = operation(storeValues.operand, parseInt(storeValues.number), parseInt(storeValues.numberTwo));


//         }

//     })
// });



// //use the result of the operation as the first number to be operated
// firstNumber = result;


// //store the operand to be used in the operation
// operand = e.target.value 
// //store the second numbers in the second number variable
// secondNumber = e.target.value
// //once we have our final result click = 
// operation(operand, firstNumber, secondNumber)
// //make sure to parse numbers into strings and vice versa

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

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
    displayValue.textContent = '';
};

const multipleOperands = (storeVal, e) => {
    storeVal.result = operation(storeVal.operand, storeVal.first, storeVal.second);
    storeVal.first = storeVal.result;
    storeVal.operand = e.target.value;
    storeVal.second = '';
};

let displayValue = document.querySelector('.output');
displayValue.textContent = '';

const storeVal = {
    first: '',
    second: '',
    operand: '',
    result: '',
};

document.querySelectorAll('button').forEach((number) => {
    number.addEventListener('click', (e) => {

        //store the first number to be operated when there is no operand yet
        if (e.target.classList.contains('number') && storeVal.operand === '') {
            storeVal.first += e.target.value;
            displayValue.textContent = storeVal.first;

        } else if (e.target.classList.contains('operand')) { //store the operand to be used in operation
            if (storeVal.first && storeVal.operand && storeVal.second) {
                multipleOperands(storeVal, e);

            } else {
                storeVal.operand = e.target.value;
                displayValue.textContent = storeVal.first + storeVal.operand;

            }
        } else if (e.target.classList.contains('number') && storeVal.operand !== '') { //store the second number when there is an operand
            storeVal.second += e.target.value;
            displayValue.textContent = storeVal.first + storeVal.operand + storeVal.second;

        } else if (e.target.value === '=' && storeVal.first && storeVal.operand && storeVal.second) {
            displayValue.textContent = operation(storeVal.operand, storeVal.first, storeVal.second);

        } else if (e.target.value === 'C') {
            clearDisplay(storeVal, displayValue);

        }

    })
});
