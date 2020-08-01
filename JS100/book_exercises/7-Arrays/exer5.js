let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let validNum = array.filter(el => Number.isInteger(el));

console.log(validNum); // => [1, 3, -4]