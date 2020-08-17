let obj = {
  num: 42,
  'property name': 'string value',
  true: false, // when quotes are omitted around a key name property, JS implicitly coerces it to a string
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {  // this compares a string property to a boolean value
    console.log("It's true!");
  }
};

// line 11-12 will never output 'It's true!' because property names are always strings, and will never be strictly equal to a boolean value
