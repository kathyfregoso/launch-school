const { number } = require("yargs");

let numbers = [3, 5, 7];


let sumOfSquares = numbers.reduce((acc,curr) => {
  return acc = (curr * curr) + acc;
},0);

console.log(sumOfSquares); // => 83