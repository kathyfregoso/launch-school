function isNotANumber(value) {
  return value !== value; // NaN is the only JS value that is not === to itself
}

console.log(isNotANumber(NaN));