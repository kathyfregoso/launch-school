// 1- What method can we use to bind a function permanently to a particular execution context?

/* 
The bind method returns a new function that is permanently bound to the object provided as 
the method's first argument. That function can be passed around and called without losing its 
context, since it is permanently bound to the provided object.
*/

// 2 -  what does this code log?

// let obj = {
//   message: "JavaScript",
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj);

/* 
nothing, unlike call and apply, bind doesn't invoke the function used to call it. It instead returns
a new function that's permanently bound to the context argument.
*/

// 3 - What will the following code output?
// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo());
// console.log(bar());

/* 
foo() is a regular function invocation, thus the context is bound to the global object. It 
will search for the names of property values a and b in the global object, and if none exist with
those names, their values are both undefined. when you attempt to use the + operator to add
two undefined operands, the result is NaN.

bar is assigned the new function returned by foo.bind(obj), which permanently bound the foo
function to the obj object. Thus, the invocation bar() references the values of 
properties a and b in obj upon invocation, and returns 5. 
*/

// 4 - What will the code below log to the console?

// let positivity = {
//   message: "JavaScript makes sense!",
// };

// let negativity = {
//   message: "JavaScript makes no sense!",
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity); // foo is permanently bound to positivity object

// the logMessage property's created and assigned the value of bar,
// which is permanently bound to the positivity object, rather than the negativity object in which
// this new method is contained
// negativity.logMessage = bar;

// logs "JavaScript makes sense!"
// negativity.logMessage();

// 5 - What will the code below output?

let obj = {
  a: "Amazebulous!",
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

// the bar variable is assigned a new function foo whose execution is permanently bound to the
// obj object
let bar = foo.bind(obj);

// outputs "Amazebulous!" - this still refers to obj
// context of bound object can't be changed, even with call and apply.
bar.call(otherObj);
