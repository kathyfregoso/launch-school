// 1- What does the following code log to the console?
// Why does the code produce the output it does?

// let RECTANGLE = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area); // logs NaN
// console.log(rect1.perimeter); // logs NaN

/* 
Lines 22 and 23 both return NaN. The value of this within RECTANGLE.area and RECTANGLE.perimeter
get set to the RECTANGLE object when they're called. Since RECTANGLE doesn't have a value for 
width and height, the property accesses return undefined. Mathematical operations on undefined
produce a value of NaN.
*/

// 2 - How would you fix the problem in the code from problem 1?

// SOLUTION:
// let RECTANGLE = {
//   // added parameters to the area and perimeter methods
//   area: function (width, height) {
//     return width * height;
//   },
//   perimeter: function (width, height) {
//     return 2 * (width + height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   // passed arguments to the method invocations
//   this.area = RECTANGLE.area(width, height);
//   this.perimeter = RECTANGLE.perimeter(width, height);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area); // logs NaN
// console.log(rect1.perimeter); // logs NaN

// Solution 2:
// let RECTANGLE = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   // explicitly set the context to the constructor function object upon invocation using call
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // => 6
// console.log(rect1.perimeter); // => 10

// 3- Write a constructor function called Circle that takes a radius as an argument.
//  You should be able to call an area method on any objects created by the constructor to get
// the circle's area. Test your implementation with the following code:

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function () {
//   return Math.PI * this.radius * this.radius;
// };

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty("area")); // => false

// 4 - What will the following code log to the console and why?

// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype.swingSword = function () {
//   return this.swung;
// };

// console.log(ninja.swingSword());

// even though swingSword is defined on the prototype after ninja is created, all objects created
// by the Ninja constructor share the same prototype object. So when swingSword is defined,
// the ninja object inherits that method.

// 5 - what will this code output and why?

// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function () {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());

/* 
This code returns an error "ninja.swingSword is not a function", because the constructor
prototype is reassignedto a new object instead of mutating the original prototype object.
This doesn't change the prototype of the ninja object, it is still the original prototype
defined when the constructor created it. This means that the swingSword method couldn't be 
found in the prototype chain of ninja
*/

// 6 - implement the method described below:

// function Ninja() {
//   this.swung = false;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// };

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung); // logs `true`
// console.log(ninjaB.swing().swung); // logs `true`

/* 
The "chainable" method invocations and property accesses on an object requires that 
methods defined on the prototype always return the context object (in this case, ninjaA and ninjaB).
*/

// 7 - create a new instance of an object, w/out having direct access to the constructor function:
// let ninjaA;

// {
//   const Ninja = function () {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else
// // my solution:
// // works but flaw is that swung property gets put in the prototype object instead of ninjaB
// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

// alternate solution:
// The value assigned to ninjaA is an object created by a constructor function.
// As such, this object has a constructor property that points back to its constructor.
// let ninjaB = new ninjaA.constructor();

// console.log(ninjaA.constructor === ninjaB.constructor); // => true
// console.log(ninjaB);

// 8 - write constructor that can be used w/ or w/out new operator. function returns same result
// either way.

// scope-safe constructor:
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + " " + last;
}

let name = "Jane Doe";
let user1 = new User("John", "Doe");
let user2 = User("John", "Doe");

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe
