// ensure Maltese and Fish classes can inherit swim method from swimMixin

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   },
// };

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(Fish.prototype, swimMixin);

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}
// Object.assign(Maltese.prototype, swimMixin);

// ALTERNATIVE SOLUTION:
// we can also add mixin to a class by using Object.assign method inside the constructor
// method and passing this and a name of the mixin as its args:

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}
Object.assign(Fish.prototype, swimMixin);

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
    Object.assign(this, swimMixin);
  }
}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim()); // Buddy is swimming.
console.log(fish1.swim()); // Nemo is swimming.
