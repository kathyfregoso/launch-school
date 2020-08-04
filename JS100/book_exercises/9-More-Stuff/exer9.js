function zero(value) {
  return 1/value === -Infinity;
}

console.log(zero(-0));

console.log(zero(0));