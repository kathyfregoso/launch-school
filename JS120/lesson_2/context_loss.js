// 1 - The code below should output "Christopher Turk is a Surgeon".
// Without running the code, what will it output?
//  If there is a difference between the actual and desired output, explain the difference.

// let turk = {
//   firstName: "Christopher",
//   lastName: "Turk",
//   occupation: "Surgeon",
//   getDescription() {
//     return (
//       this.firstName + " " + this.lastName + " is a " + this.occupation + "."
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);

// ANSWER:
/* 
This code outputs  "undefined undefined is a undefined."  This is because when the method 
turk.getDescription gets passed to logReturnVal invocataion, the context changes from turk to 
the global object. thus, when logReturnVal executes, it looks for the values of firstName, 
lastName, and occupation in the global object, and they all return undefined
*/

// 2 - modify the program so logReturnVal accepts an additional context arg. it should return
// the desired output

// let turk = {
//   firstName: "Christopher",
//   lastName: "Turk",
//   occupation: "Surgeon",
//   getDescription() {
//     return (
//       this.firstName + " " + this.lastName + " is a " + this.occupation + "."
//     );
//   },
// };

// function logReturnVal(func, context) {
//   // added call method to invoke func w/ explicit execution context
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// // invokation with turk as the context argument, then that value is passed to call method
// logReturnVal(turk.getDescription, turk);

// 3 - extract getDescription from turk, but always want to execute it w/ turk as context.

let turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription() {
    return (
      this.firstName + " " + this.lastName + " is a " + this.occupation + "."
    );
  },
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

// use bind to permanently bind method to turk
logReturnVal(turk.getDescription.bind(turk));

// 4 - consider this code:

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     this.titles.forEach(function (title) {
//       console.log(this.seriesTitle + ": " + title);
//     });
//   },
// };

// TESgames.listGames();

// Will this code produce the following output? Why or why not?
/* 
The Elder Scrolls: Arena
The Elder Scrolls: Daggerfall
The Elder Scrolls: Morrowind
The Elder Scrolls: Oblivion
The Elder Scrolls: Skyrim
*/

// ANSWER:
/* 
No, since forEach executes the function expression passed to it, it gets executed with the global
object as context. Remember that when passing functions as arguments, they are stripped of their 
intended context objects. `this` has the wrong value, it's not the TESgames object,
and it doesn't log what we want. this.seriesTitle resolves to undefined, and we get this:

undefined: Arena
undefined: Daggerfall
undefined: Morrowind
undefined: Oblivion
undefined: Skyrim
*/

// 5 - use let self = this; to ensure that TESgames.listGames uses TESGames as its context and
// logs the proper output.

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     let self = this; // added here
//     this.titles.forEach(function (title) {
//       console.log(self.seriesTitle + ": " + title);
//     });
//   },
// };

// TESgames.listGames();

// 6 - The forEach method provides an alternative way to supply the execution context for the
// callback function. Modify the program from the previous problem to use that technique to
// produce the proper output:

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     this.titles.forEach(function (title) {
//       console.log(this.seriesTitle + ": " + title);
//       // use optional thisArg arg to specify context when invoking callback
//     }, this);
//   },
// };

// TESgames.listGames();

// 7 - use arrow function to do the same thing

const TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames: function () {
    // arrow function defined inside another function always has the same context as outer function
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ": " + title);
    });
  },
};

TESgames.listGames();

// 8 - consider this code, what will value of foo.a be after this code runs?

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// the value will be 0, because increment is invoked as a standalone function on line 169.
// thus its execution context is the global object, not the foo object that is expected.
// thus foo.a isn't modified, it's value stays at 0

// 9 - Use one of the methods we learned in this lesson to invoke increment with an explicit
// context such that foo.a gets incremented with each invocation of incrementA.

let foo = {
  a: 0,
  incrementA: function () {
    // changed inner increment function to arrow function
    let increment = () => {
      this.a += 1;
    };

    increment();
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a); // 3

// alternative solution  that uses apply to invoke increment w/ explicit context:
// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.apply(this);
//   }
// };
