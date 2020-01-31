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



let displayValue = document.querySelector('.output');


// const storeValues = {
//     first: '',
//     second: '',
//     operand: '',
//     result: ''
// };

let firstNumber = '';
let operand = '';
let secondNumber = '';
let result = '';

document.querySelectorAll('button').forEach((number) => {
    number.addEventListener('click', (e) => {

        // if (result.toString() !== ''){
        //     result = firstNumber;
        //     console.log(firstNumber)
        // }
        
        //store the first number to be operated when there is no operand yet
        if (e.target.classList.contains('number') && operand === '') {
            firstNumber += e.target.value
            console.log(firstNumber)

        } else if (e.target.classList.contains('operand')) { //store the operand to be used in operation
            if (firstNumber && operand && secondNumber) {
                result = operation(operand, firstNumber, secondNumber);
                firstNumber = result;
                operand = e.target.value
                secondNumber = '';
                console.log(result)
                
                
            } else {
                operand = e.target.value
                console.log(operand)
                
            }

        } else if (e.target.classList.contains('number') && operand !== '') { //store the second number when there is an operand
            secondNumber += e.target.value
            console.log(secondNumber)
            
           
        } 

        // //use the result of the operation as the first number to be operated
        // firstNumber = result;


        // //store the operand to be used in the operation
        // operand = e.target.value 
        // //store the second numbers in the second number variable
        // secondNumber = e.target.value
        // //once we have our final result click = 
        // operation(operand, firstNumber, secondNumber)
        // //make sure to parse numbers into strings and vice versa


        if (e.target.value === '=') {
            displayValue.textContent = operation(storeValues.operand, parseInt(storeValues.number), parseInt(storeValues.numberTwo));

        }

    })
});