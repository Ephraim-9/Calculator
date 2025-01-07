const add = (a,b) => (a + b);
const subtract = (a,b) => (a - b);
const multiply = (a,b) => (a * b);
const divide = (a,b) => (a / b);

let numberA = []
let operator = []
let numberB = []

const operate = (a, operator, b) => (operator(a,b));

let disp = document.getElementById("display");
let buttonVal = 0


document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    const btn = event.target;
    buttonVal = btn.innerText
    disp.textContent = btn.innerText
  }
  