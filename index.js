let numberA = ''
let operator = ''
let numberB = ''

const clearF = () => {
    numberA = ''
    operator = ''
    numberB = ''
    disp.textContent = ''
}
const operate = (a, b) => {
    if (operator === "+") {
        return a + b
    }
    else if (operator === "-") {
        return a - b
    }
    else if (operator === "*") {
        return a * b
    }
    else if (operator === "/") {
        return a / b
    }
}

let disp = document.getElementById("display");
let result = 0

document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    event.preventDefault()
    const btn = event.target;
    if (operator === '') {
        numberA += btn.innerText
        disp.textContent += btn.innerText
    }
    else {
        numberB += btn.innerText
        disp.textContent += btn.innerText
    }
  }
  
document.querySelectorAll('.operator').forEach((button) => {
    button.addEventListener('click', btnActionOp);
  });
  
  function btnActionOp(event) {
    const btn = event.target;
    disp.textContent = btn.innerText
    operator = btn.innerText
  }

const equal = document.querySelector('#equal')
equal.addEventListener("click", () => {
    result = operate(Number(numberA), Number(numberB))
    disp.textContent = result
})
const clear = document.querySelector('#clear')
clear.addEventListener("click", () => {
    clearF()
})