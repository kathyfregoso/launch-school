let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) { // this property value is a function expression
    console.log('Hej, ' + name + '!');
  }
};

jane.greet('Bobby'); // outputs 'Hej, Bobby!'