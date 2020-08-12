function isBlank(str) {
  return !str;
};

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true