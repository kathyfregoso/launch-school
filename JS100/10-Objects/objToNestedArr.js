let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person)); // outputs: [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
// the Object.create() method returns an array of an object's key-value pairs

// do the same with a for...in loop:

let keyVals = [];

for (let prop in person) {
  keyVals.push([prop, person[prop]])
};

console.log(keyVals);