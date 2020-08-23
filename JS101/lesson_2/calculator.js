// Ask user for the first number
// Ask user for the second number.
// Ask user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result in the terminal.

// require() is a built-in node function that looks for readline-sync library
// returns library as obj, which we assign as the const readline var
const readline = require('readline-sync');

function prompt(message) {
  console.log(`>> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Calculator!');

// use built-in question method from readline-sync library to get user input
// readline.question, readline is the name of the var containing the obj
// quest method makes prog wait for keyboard, returns str when 'Return' pressed
prompt('What is the first number?');
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt('Hmm... that does not look like a valid number.');
  num1 = readline.question();
}

prompt(`What's the second number?`);
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt('Hmm... that does not look like a valid number.');
  num2 = readline.question();
}

prompt(`What operation would you like to perform?:`);

prompt(`1) Add 2) Subtract 3) Multiply 4) Divide`);

let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4!');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(num1) + Number(num2);
    break;
  case '2':
    output = Number(num1) - Number(num2);
    break;
  case '3':
    output = Number(num1) * Number(num2);
    break;
  case '4':
    output = Number(num1) / Number(num2);
    break;
}

prompt(`The result is: ${output}`);

