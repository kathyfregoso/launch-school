const walkMixin = {
  walk() {
    return `Let's go for a walk!`;
  },
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
// use Object.assign to add method from walkMixin to the prototype object of Cat class
// lets us invoke walk on any instance of Cat
Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Anabelle");
console.log(kitty.greet()); // Hello! My name is Anabelle!
console.log(kitty.walk()); // Let's go for a walk!

/* 
mixins used to contain methods that may be useful for multiple classes, but not all classes.
when you mix a module into a class, you allow the class to invoke the contained methods.
*/
