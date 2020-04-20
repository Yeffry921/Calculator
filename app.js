const calculator = (() => {
    const numbers = document.querySelectorAll('[data-number]');
    const operators = document.querySelectorAll('[data-operation]');
    const equalsBtn = document.querySelector('[data-equals]');
    const allClearBtn = document.querySelector('[data-all-clear]');
    const deleteBtn = document.querySelector('[data-delete]');
    const currentOperandTextElement = document.querySelector('[data-previous-operand]');
    const previousOperandTextElement = document.querySelector('[data-current-operand]');
    let currentNumber = '';
    let previousNumber = ''
    let currentOperand = ''

    numbers.forEach((num) => {
        num.addEventListener('click', (event) => {
            appendNumbers(event.target.innerText);
            updateUI();
        })
    });

    operators.forEach((operator) => {
        operator.addEventListener('click', (event) => {
            if(previousNumber !== ''){
                operate();
                updateUI();
            }
            if(currentNumber === ''){
                return;
            }
            currentOperand = event.target.innerText;
            previousNumber = currentNumber;
            currentNumber = '';
            updateUI()
        })
    });

    //equalsBtn.addEventListener('click', operate) //why doesn't this work?
    equalsBtn.addEventListener('click', () => {
        operate();
        updateUI()
    })

    const appendNumbers = (number) => {
        if(currentNumber.includes('.') && number === '.'){
            return
        }
        currentNumber = currentNumber.toString() + number.toString();
    }

    const operate = () => {
        let result;
        let curr = parseFloat(currentNumber);
        let prev = parseFloat(previousNumber);

        if(isNaN(curr) || isNaN(prev)){
            return
        }
        
        if (currentOperand === '+') {
            result = add(curr, prev)
        };
        if (currentOperand === '-') {
            result = subtract(curr, prev)
            
        };
        if (currentOperand === '*') {
            result = multiply(curr, prev)
            
        };
        if (currentOperand === '÷') {
            result = divide(curr, prev);
        
        }
        currentNumber = result;
        currentOperand = '';
        previousNumber = '';
    }

    const updateUI = () => {
        previousOperandTextElement.textContent = `${previousNumber} ${currentOperand}`;
        
        currentOperandTextElement.textContent = `${currentNumber}`;
        
    }


    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;

    return {
        add,
        subtract,
        multiply,
        divide
    };
})();
















































// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         //run this as soon as it start, otherwise line 19 is undefined
//         this.allClear();
//     }

//     grabValues(number) {
//         if(this.currentValue.length <= 7){
//             this.currentValue = this.currentValue + number
//         }
//         return;
//     }
//     grabOperand(operand) {
//         this.operand = operand;
//         this.previousValue = this.currentValue;
//         this.currentValue = '';
//     }
//     allClear() {
//         this.currentValue = '';
//         this.previousValue = '';
//         this.operand = '';
//     }
//     delete() {
//         this.currentValue = this.currentValue.toString().slice(0, -1)
//     }
//     compute() {
//         const prev = parseFloat(this.previousValue);
//         const curr = parseFloat(this.currentValue);
//         let result;
//         if(this.operand === '+'){
//             result = prev + curr
//         } else if(this.operand === '-'){
//             result = prev - curr
//         } else if(this.operand === '*'){
//             result = prev * curr
//         } else if(this.operand === '÷'){
//             result = prev / curr
//         } 

//         if(result.toString().length > 8){
//             this.currentValue = 'Error';
//             return;
//         }
//         this.currentValue = result;
//         this.operand = '';
//         this.previousValue = ''

//     }
//     updateUI(){
//         this.currentOperandTextElement.textContent = this.currentValue;
//         this.previousOperandTextElement.textContent = `${this.previousValue} ${this.operand}`;
//     }
// };

// const numberBtns = document.querySelectorAll('[data-number]');
// const operationBtns = document.querySelectorAll('[data-operation]');
// const equalsBtn = document.querySelector('[data-equals]');
// const deleteBtn = document.querySelector('[data-delete]');
// const allClearBtn = document.querySelector('[data-all-clear]');
// const currentOperandTextElement = document.querySelector('[data-previous-operand]');
// const previousOperandTextElement = document.querySelector('[data-current-operand]');

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


// numberBtns.forEach((number) => {
//     number.addEventListener('click', () => {
//         calculator.grabValues(number.textContent);
//         calculator.updateUI();
//     })
// });

// operationBtns.forEach((operand) => {
//     operand.addEventListener('click', () => {
//         calculator.grabOperand(operand.textContent);
//         calculator.updateUI();
//     })
// });

// equalsBtn.addEventListener('click', () => {
//     calculator.compute();
//     calculator.updateUI();
// });

// deleteBtn.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateUI();
// });

// allClearBtn.addEventListener('click', () => {
//     calculator.allClear();
//     calculator.updateUI();
// });



// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.allClear();
//     }
//     allClear() {
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;
//     }
//     delete() {
//         this.currentOperand = this.currentOperand.toString().slice(0, -1);
//     }
//     appendNumber(number) {
//         if (this.currentOperand.includes('.') && number === '.') return;
//         this.currentOperand = this.currentOperand.toString() + number.toString();
//     }
//     chooseOperation(operation) {
//         if (this.currentOperand === '') return;
//         if (this.previousOperand !== '') {
//             this.compute();
//         }
//         this.operation = operation;
//         this.previousOperand = this.currentOperand;
//         this.currentOperand = '';
//     }
//     compute() {
//         let computation;
//         const prev = parseFloat(this.previousOperand);
//         const current = parseFloat(this.currentOperand);
//         if (isNaN(prev) || isNaN(current)) return

//         switch (this.operation) {
//             case '+':
//                 computation = prev + current;
//                 break;
//             case '-':
//                 computation = prev - current;
//                 break;

//             case '*':
//                 computation = prev * current;
//                 break;

//             case '÷':
//                 computation = prev / current;
//                 break;
//             default:
//                 return
//         }
//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''

//     }
//     updateDisplay() {
//         this.currentOperandTextElement.textContent = this.currentOperand;
//         if(this.operation != null) {
//             this.previousOperandTextElement.textContent = `${this.previousOperand} ${this.operation}`;
//         }
//     }
// }

// const numberBtns = document.querySelectorAll('[data-number]');
// const operationBtns = document.querySelectorAll('[data-operation]');
// const equalsBtn = document.querySelector('[data-equals]');
// const deleteBtn = document.querySelector('[data-delete]');
// const allClearBtn = document.querySelector('[data-all-clear]');
// const currentOperandTextElement = document.querySelector('[data-previous-operand]');
// const previousOperandTextElement = document.querySelector('[data-current-operand]');

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// numberBtns.forEach((button) => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();
//     })
// });

// operationBtns.forEach((operation) => {
//     operation.addEventListener('click', () => {
//         calculator.chooseOperation(operation.textContent);
//         calculator.updateDisplay();
//     })
// });

// equalsBtn.addEventListener('click', () => {
//     calculator.compute();
//     calculator.updateDisplay();
// });

// deleteBtn.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateDisplay();
// });

// allClearBtn.addEventListener('click', () => {
//     calculator.allClear();
//     calculator.updateDisplay();
// });