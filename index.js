const add = (a,b) => (a + b);
const subtract = (a,b) => (a - b);
const multiply = (a,b) => (a * b);
const divide = (a,b) => (a / b);

let numberA = 2
let operator = add
let numberB = 3


const operate = (a, b) => (operator(a,b));

let disp = document.getElementById("display");
let result = 0

document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    event.preventDefault()
    const btn = event.target;
    for (i = 0; i < 2; i++) {
        if (i === 0) {
            numberA = btn.innerText
            alert(numberA)
            disp.textContent = btn.innerText
            debugger
        }
        else if (i === 1) {
            numberB = btn.innerText
            i = 0
            alert(numberB)
            disp.textContent = btn.innerText
        }
    }
  }
  
document.querySelectorAll('.operator').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    const btn = event.target;
    disp.textContent = btn.innerText
    if (btn.innerText === '+') {
        let operator = add
        alert(operator)
    }
    else if (btn.innerText === '-') {
        let operator = subtract
        alert(operator)
    }
    else if (btn.innerText === '*') {
        let operator = multiply
        alert(operator)
    }
    else if (btn.innerText === '/') {
        let operator = divide
        alert(operator)
    }  
  }

const equal = document.querySelector('#equal')
equal.addEventListener("click", () => {
    result = operate(numberA, numberB)
    disp.textContent = result
    alert(result)
})