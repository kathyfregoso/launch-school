// Ask user for the first number
// Ask user for the second number.
// Ask user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result in the terminal.

// require() is a built-in node function that looks for the readline-sync library in the node_modules folder
// the function returns the library in object form, which we assign as the constant readline variable
const readline = require('readline-sync'); 

console.log('Welcome to Calculator!');

console.log(`What's the first number?`);

// use built-in question method from readline-sync library to get user input
// to do so, we refer to the method as readline.question, where readline is the name of the variable that contains the library object
// the question method makes the program wait for some keyboard input, and returns the input as a string when the user presses 'Return' key
let num1 = Number(readline.question());

console.log(`What's the second number?`);
let num2 = Number(readline.question());

console.log(`What operation would you like to perform?\n 1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question();

let output;
if (operation === '1') { // addition
  output = num1 + num2;
} else if (operation === '2') { // subtraction
  output = num1 - num2;
} else if (operation === '3') { // multiplication
  output = num1 * num2;
} else if (operation === '4') { // division
  output = num1 / num2;
}

console.log(`The result is: ${output}`);

