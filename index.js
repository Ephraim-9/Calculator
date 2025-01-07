const add = (a,b) => (a + b);
const subtract = (a,b) => (a - b);
const multiply = (a,b) => (a * b);
const divide = (a,b) => (a / b);

let numberA = 0
let operator = 0
let numberB = 0

const operate = (a, operator, b) => (operator(a,b));

let disp = document.getElementById("display");


document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    const btn = event.target;
    disp.textContent = btn.innerText
    if (numberA.length > 0) {
        numberB.push(btn.innerText)
    } else if(numberB.length > 0) {numberA.push(btn.innerText) }
  }
  
document.querySelectorAll('.operator').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    const btn = event.target;
    disp.textContent = btn.innerText
    if (btn.innerText === '+') {
        operator = add
    }
    else if (btn.innerText === '-') {
        operator = subtract
    }
    else if (btn.innerText === '*') {
        operator = multiply
    }
    else if (btn.innerText === '/') {
        operator = divide
    }
  }

const equal = document.querySelector('#equal')
equal.addEventListener("click", () => {
    disp.textContent = operate(numberA, operator, numberB)
})