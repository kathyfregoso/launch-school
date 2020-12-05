// use mixins to add walk method to each class
// you could also create a parent class and make other classes inherit from that class

let walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}
Object.assign(Person.prototype, walkMixin);

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}
Object.assign(Cat.prototype, walkMixin);

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}
Object.assign(Cheetah.prototype, walkMixin);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// mixins more appropriate in a has-a relationship;
// general guidelines:
// - want some additional functionality (mix-ins, has-a) VS
// - want to extend the abilities of the class (inheritance, is-a)

// extending the abilities of a class coincides with an is-a relationship, not has-a
