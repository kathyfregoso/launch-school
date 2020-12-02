// part 1
// create towMixin mixin that contains method named tow, that returns `I can tow a trailer!`
// when invoked. include mixin in the Truck class

// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`;
//   },
// };

// class Truck {
//   constructor() {
//     Object.assign(this, towMixin);
//   }
// }

// class Car {}

// let truck = new Truck();
// console.log(truck.tow()); // I can tow a trailer!

/* 
mixins useful for organizing similar methods that may be relevant to multiple classes. 
typically you use a Truck for towing, not a Car, meaning tow is only relevant to Truck objects
with mixins, we can include them in spec. classes. We can use Object.assign to include methods
from towMixin in every object we create w/ Truck constructor. 

This is slightly heavy on memory, but can be remedied by assigning mixin to 
Truck.prototype instead:

class Truck {}
Object.assign(Truck.prototype, towMixin);
*/

// part 2
// create a class named Vehicle that, upon instantiation, assigns the arg to year prop.
// both Truck and Car inherit from Vehicle

const towMixin = {
  tow() {
    return "'I can tow a trailer!'";
  },
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year); // 2002
console.log(truck.tow()); // I can tow a trailer!

let car = new Car(2015);
console.log(car.year); // 2015

/* 
mixins useful for containing similar methods, however, sometimes class inheritance is also
needed. this exerecise illustrates that it's possible to inherit from a class and use
a mixin at the same time.
To allow Truck and Car classes to access year, they both inherit from Vehicle.
*/
