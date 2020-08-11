if (true) {
  let myValue = 20;
}

console.log(myValue);

// will return 'ReferenceError: myValue is not defined' because the let variable is block-scoped (not accessible outside of the if block)