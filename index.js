const add = (a,b) => (a + b);
const subtract = (a,b) => (a - b);
const multiply = (a,b) => (a * b);
const divide = (a,b) => (a / b);

let numberA = []
let operator = []
let numberB = []

const operate = (a, operator, b) => (operator(a,b));

