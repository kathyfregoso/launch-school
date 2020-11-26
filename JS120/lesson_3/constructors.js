// 1 - You capitalize the first letter of the constructor name,
// whereas other functions use camelCase as the naming convention.

// 2 - What happens if you run the following code? Why?
// function Lizard() {
//   this.scamper = function () {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // ?

// ANSWER:
/* 
Since the creation of the constructor instance `lizzy` is missing the `new` keyword, it triggers 
a `TypeError` that says it cannot read property `'scamper'` of `undefined`. 
If you don't use the `new` keyword, the constructor function won't work, instead, it acts like an 
ordinary function in which `this` depends on how the function is called. Thus, it won't get set 
to reference the new object. 

Also, since functions that don't return an explicit value return `undefined`, calling a 
constructor without `new` also returns `undefined` , and that becomes the value of the `scamper` 
method. You can't call a method on `undefined`, which is why there is an error.
*/

// 3 - Alter the code in problem 2 so that it produces the desired output: "I'm scampering!".
function Lizard() {
  this.scamper = function () {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard(); // I added the new keyword to the constructor invocation
lizzy.scamper(); // "I'm scampering!"
