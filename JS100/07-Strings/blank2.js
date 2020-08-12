function isBlank(str) {
  return str.trim().length === 0;
};

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true