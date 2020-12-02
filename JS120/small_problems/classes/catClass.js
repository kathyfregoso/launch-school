// 1. create class named Cat
// 2. create an instance of Cat and assign it to var kitty
// 3. add a constructor method that logs `I'm a cat!` when new Cat obj is initialized

// class Cat {
//   constructor() {
//     console.log(`I'm a cat!`);
//   }
// }

// let kitty = new Cat();

/* 
1. class declaration begins w/ class keyword followed by the name of the class and {}
2. instantiate a new Cat object by using new keyword in front of function call, which
turns the function call into a constructor call.
to use the new Cat object, we assign it to a var called kitty. the var can be used to
interact w/ the object in various ways.
3. when defining a class, usually you need to define the constructor method. adding this
method lets us execute expressions when a new Cat obj is initialized
*/

// 4. add a param. to constructor that provides a name for the Cat obj; assign this
// parameter to a property called name and use it to log a greeting w/ the provided name
// (remove code that logs `I'm a cat!`)

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }

// let kitty = new Cat("Anabelle");

/* 
Cat constructor expects 1 param: name. when it's called w/ new keyword, it assign the 
param to the name prop of the curr instance. the prop name can be accessed anywhere w/in the 
class using this keyword. We only need to reference prop name immediately following 
instance initialization. In this object kitty, 'Anabelle' is dynamic, meaning we used prop
name to print the value. 'Anabelle' could be 'Oliver' or any other string 
*/

// 5. move greeting from constructor method to an instance method named greet that logs
// a greeting to the console when invoked

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }

// let kitty = new Cat("Anabelle");
// kitty.greeting();

/* 
instance methods are only available when there's an instance of the class; kitty is 
an instance of the Cat class. the greeting method can be invoked by unique instance objects.
property name can be accessed anywhere in class, so the logged greeting is moved to the 
greeting instance method
*/

// 6. add instance method rename to rename kitty when invoked

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   // accepts 1 arg representing new name. reassigns prop name to arg val
//   rename(name) {
//     this.name = name;
//   }
// }

// let kitty = new Cat("Anabelle");
// console.log(kitty.name); // Anabelle
// kitty.rename("Hellabelle");
// console.log(kitty.name); // Hellabelle

// 7. Modify the code so `Hello! I'm a cat!` is logged when Cat.genericGreeting is invoked.

// class Cat {
//   // define static methods on classes using the static keyword
//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }
// }

// // genericGreeting invoked on Cat class, not instance of Cat - this indicates a static method
// Cat.genericGreeting();

/* 
static methods can only be called on the class itself, not instance of a class.
invoking a static method on an instance of the class results in a TypeError
*/

// 8. add 2 methods to code: static method genericGreeting and instance method personalGreeting
// first method: logs a greeting that's generic to class - Hello! I'm a cat!
// second method: instance method logs a greeting that's custom to the object

class Cat {
  constructor(name) {
    this.name = name;
  }

  // static methods called on class (constructor function), not an instance; they are generic
  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }

  // another static method example
  static speak() {
    console.log(`Meow!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Anabelle");
Cat.genericGreeting(); // static method invocation (generic)
kitty.personalGreeting(); // instance method invocation (personal)
Cat.speak(); // static method invocation (generic)
