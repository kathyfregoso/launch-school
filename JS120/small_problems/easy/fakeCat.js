// without calling Cat constructor, create object that looks and acts like a
// Cat instance that doesn't have a defined name

class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = new Cat(); // Object.create(Cat.prototype) also works
// Object.create uses an existing object as the prototype of the newly created object
console.log(fakeCat instanceof Cat); // your implementation // logs true
console.log(fakeCat.name); // logs undefined
console.log(fakeCat.speaks()); // logs undefined says meowwww.
