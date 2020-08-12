function repeat(num, str) {
  let repeatStr = "";
  while (num > 0) {
    repeatStr += str;
    num--;
  }
  return repeatStr;
};

console.log(repeat(3, 'ha'));