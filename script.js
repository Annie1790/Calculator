const inputField = document.querySelector("#input-field");
const outputField = document.querySelector("#output-field");
const acButton = document.querySelector("#AC-button");
const cButton = document.querySelector("#C-button");
const remainderButton = document.querySelector("#remainder-button");
const divideButton = document.querySelector("#divide-button");
const multiplyButton = document.querySelector("#multiply-button");
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const equalButton = document.querySelector("#equal-button");

const num9 = document.querySelector("#number-9");
const num8 = document.querySelector("#number-8");
const num7 = document.querySelector("#number-7");
const num6 = document.querySelector("#number-6");
const num5 = document.querySelector("#number-5");
const num4 = document.querySelector("#number-4");
const num3 = document.querySelector("#number-3");
const num2 = document.querySelector("#number-2");
const num1 = document.querySelector("#number-1");
const num0 = document.querySelector("#number-0");
const dot = document.querySelector("#dot-button");

let displayValue = [];
inputField.textContent = [];

num9.addEventListener("click", function () {
    inputField.textContent = displayValue.push(num9);
    console.log(inputField)
})


function add(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};

function operate(operator, number1, number2) {
    if (operator == "+") {
        add(number1,number2)
    }
    if (operator == "-") {
        subtract(number1,number2)
    }

    if (operator == "*") {
        multiply(number1,number2)
    }

    if (operator == "/") {
        divide(number1,number2)
    }
}

