// 1 - What will this code log to the console? Why?

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);

/* This code will log 2 because baz, the inheriting object, delegates its properties to the 
prototype object qux, which means that baz does not have its own properties. JS searches the 
prototype chain for a foo property and finds the property in qux. Hence
baz.foo + qux.foo is the same as 1 + 1 which equals 2. */

// 2 - What does this code log? Why?

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

// console.log(baz.foo + qux.foo);
/*
baz.foo + qux.foo evaluates to 3. By setting the foo property in baz to the value of 2, baz now
effectively has its "own" new property, even if it has the same name as a property in its 
prototype qux. Property assignment doesn't use the prototype chain. This reassignment does not 
affect the qux object, and it is not mutated. Therefore, qux.foo has a value of 1, and baz.foo 
has a value of 2, and their sum is 3.
*/

// 3 - What does this code log? Why?

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// qux.foo = 2;

// console.log(baz.foo + qux.foo);

/*
baz.foo + qux.foo evaluates to 4. When the foo property of qux is reassigned to 2, this change is 
also reflected in baz. This is because inheriting objects like baz hold references to their 
prototype, thus, changes to the prototype are reflected. baz does not have its "own" property of 
foo. JS uses the prototype chain to lookup the value of baz.foo, and finds the foo property 
in qux. Thus baz.foo + qux.foo is the same as 2 + 2.
*/

// 4 - Write a function that searches the prototype chain of an object for a given property and
// assigns it a new value. If the property doesn't exist, the function does nothing.

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// prototype chain
// fooC => fooB => fooA

// iterative solution
// function assignProperty(obj, property, value) {
//   while (obj !== null) {
//     if (obj.hasOwnProperty(property)) {
//       obj[property] = value;
//       break;
//     }
//     obj = Object.getPrototypeOf(obj);
//   }
// }

// recursive solution:
// function assignProperty(obj, property, value) {
//   if (obj === null) {
//     // property not found
//     return;
//   } else if (obj.hasOwnProperty(property)) {
//     obj[property] = value;
//   } else {
//     assignProperty(Object.getPrototypeOf(obj), property, value);
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// 5 - if foo is an arbitrary object, will these loops always log the same results? why or why not?

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach((property) => {
//   console.log(`${property}: ${foo[property]}`);
// });

/* 
The for/in loop will log all of an objects "own" properties as well as the prototype properties.

Object.keys creates an array of an objects "own" enumerable properties, excluding prototype 
properties. 

So they will definitely NOT always log the same results to the console, but it is certainly 
possible that they will log the same results, but only when the prototype chain doesn't
contain enumerable properties. 

for example:
*/

// let bar = { a: 1, b: 2 };
// let foo = Object.create(bar);
// foo.a = 3;
// foo.c = 4;

// for in logs:
// a: 3        // from foo
// c: 4        // from foo
// b: 2        // from bar

// the second loop logs:
// a: 3        // from foo
// c: 4        // from foo

// 6 - how do you create an object with no prototype? how can you determine if an obj has a
// prototype?

// You can create an (bare) object without a prototype by setting the prototype to null:

// let empty = Object.create(null);
// // undefined

// Object.getProtoypeOf(empty);
// // null

// to determine if an object has a prototype, test whether the value produced by
// Object.getPrototypeOf is null

// if (Object.getPrototypeOf(obj)) {
// obj has a prototype
// else {
// obj doesn't have a prototype
// }
// }

// this code will raise an exception if obj has a null prototype
