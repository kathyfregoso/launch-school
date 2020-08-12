const { type } = require("os");

function filter(input) {
  return Array.isArray(input);
};

console.log(filter(23));
console.log(filter([1,2,3]));