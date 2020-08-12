let str = 'launch school tech & talk';
let newStr = str.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(" "); // also works with .substring() method

console.log(newStr);