function multiply(num1,num2) {
  return num1 * num2;
}

function getNum(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let num1 = getNum('Enter the first number: ');
let num2 = getNum('Enter the second number: ');
console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);