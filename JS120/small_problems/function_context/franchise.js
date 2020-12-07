// why doesn't this franchise.allMovies return the desired object? 
// fix this problem; take advantage of JS lexical scoping rules.

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
  // this is bound to the wrong object (global object) when the anon function passed to map is
  // invoked
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// console.log(franchise.allMovies()) // returns [ 'undefined 1', 'undefined 2', 'undefined 3' ]

// solution 1 -  Preserve Context with a Variable in Outer Scope
/* 
In this example, we see how passing a function as an argument strips it of its intended
context object, which in this case is franchise. We can preserve the context with a variable
in the outer scope. We can use that variable and its value inside the nested inner function. We
 assign this to the local var self. Since JS uses lexical scoping rules for variables, the inner
 function can access self within its body. It lets us use it instead of this to access the 
 correct context object - franchise.
*/

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this; // franchise is the context
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

// solution 2 - pass hard-bound anon function to map
/* 
Here I call bind on the inner function and get a new function with its context permanently
(hard-bound) to the franchise object.
*/

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }.bind(this)); // binds context to franchise
//   },
// };

// solution 3: use an arrow function
/* 
Use an arrow function as a callback to the map method call. When using arrow functions, the this
keyword is lexically bound. Arrow functions inherit their execution context from the surrounding
scope where they were defined - so an arrow func definedd inside another func always has the same
context as the outer function. They won't lose their surrounding context
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => {
      return `${this.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies()); 
// returns:
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]