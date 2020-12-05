// rewrite these object types using class keyword

// function Person() {}
// Person.prototype.greeting = function (text) {
//   console.log(text);
// };

// function Shouter() {
//   Person.call(this);
// }
// Shouter.prototype = Object.create(Person.prototype);
// Shouter.prototype.greeting = function (text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// };

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// class version:

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    // use super to invoke the method greeting on object's parent
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
