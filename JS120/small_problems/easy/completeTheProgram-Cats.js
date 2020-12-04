class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  // since the constructor method in Cat requires args that differ from constructor method
  // in Pet class, we must define a constructor method for Cat, and that method must call super
  constructor(name, age, fur) {
    super(name, age);
    this.fur = fur;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
  }
}

let pudding = new Cat("Pudding", 7, "black and white");
let butterscotch = new Cat("Butterscotch", 10, "tan and white");

console.log(pudding.info()); // My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotch.info()); // My cat Butterscotch is 10 years old and has tan and white fur.

// further exploration:
// alternative approach involves modifying the Pet class to accept a fur param
// if we did this, we wouldn't need to supply a constructor method to Cat

// why would we be able to omit the constructor method?:
// - Brevity; no constructor method on an extending class calls constructor automatically
//  and passes all arguments to super

// is it a good idea to modify Pet this way? Why or why not?:
// Generally no. Adding local var params to a superclass makes it less useful (generalized)
// as a base that many subclasses can inherit from.

// How might you deal with some problems, if any, from modifying Pet?:
// The superclass could set optional parameters to null or undefined by default.
// Its methods would then need to account for these values to not throw errors.
