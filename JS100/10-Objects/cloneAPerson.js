function clone(obj) {
  return Object.assign({}, obj); // shallow copies all of the input object's enumerable own properties to an empty object (mutates the first arg/target object in the method)
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person); // creates a copy of the source object (person) without any references to it
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33