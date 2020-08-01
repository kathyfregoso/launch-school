const { arrayExpression } = require("@babel/types");

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddVal = arr.map((el,i) => {
  return arr[i] = el.length;
}).filter(el => el % 2 !== 0);

console.log(oddVal)