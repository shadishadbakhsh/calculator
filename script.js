//calculator program

const add = (a,b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

let firstNum = 0
let secondNum = 0
let operator = 'none'

const operate = (firstNum, secondNum, operator) => {
    firstNum = +(parseFloat(firstNum).toFixed(2));
    secondNum = +(parseFloat(secondNum).toFixed(2));
    let result = 0;
    switch(operator){
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            break;
        case '×':
            result = multiply(firstNum, secondNum);
            break;
        case '÷':
            result = divide(firstNum, secondNum);
            break;
        default:
            result = 'error'
    }
    console.log(result)
    return result;
}

const num = document.querySelectorAll('.num')
const operatorBtn = document.querySelectorAll('.operatorBtn')
const display = document.querySelector('.display')
let calcDisplayVal = display.textContent

const addToDisplay = (btns) => {
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            display.textContent += btn.textContent;
            calcDisplayVal = display.textContent;
        })
    })
}

addToDisplay(num)
addToDisplay(operatorBtn)

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    calcDisplayVal = '';
})

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    let optArr = display.textContent.match(/[+\-×÷]/);
    let numArr = display.textContent.split(/[+\-×÷]/);

    let result = operate(numArr[0], numArr[1], optArr[0]).toFixed(2);
    display.textContent = `${result.replace('.00', '')}${optArr[1] || ''}`;
    calcDisplayVal = display.textContent;
});

