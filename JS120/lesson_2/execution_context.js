/* 
1 - what will this code output?
*/

// function func() {
//   return this;
// }

// let context = func();

// console.log(context);

/* 
This outputs the global object. In this code, we assign the function func to the context variable. 
Since context's value is a regular invocation of the func function, the implicit execution context
 of func is the global object.
*/

/* 
2 - what will this code output?
*/

// let obj = {
//   func: function () {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context);

/* 
This code outputs the obj object, since the implicit execution context for func is the obj object. 
It looks like this: { func: [Function: func] }
obj.func() is considered a method call since it's called using method syntax. Method calls
receive implicit execution context referring the the object used to invoke it.
*/

/* 
3 - What will the following code output?
*/

// message = "Hello from the global scope!";

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage();

// let foo = {
//   message: "Hello from the function scope!",
// };

// foo.deliverMessage = deliverMessage;

// foo.deliverMessage();

/* 
This code logs the following:
Hello from the global scope! // returns from deliverMessage() 
Hello from the function scope! // returns from foo.deliverMessage()

There are two separate invocations here:
1- The regular function invocation deliverMessage()'s implicit execution context 
is the global object. The global variable message is assigned a string value without using the let,
const, or var keywords, which means the variable gets added to the global object as a property.
That is what is referenced by the function invocation. This results in the output 
"Hello from the global scope!"
 
2- foo.deliverMessage() is a method call whose implicit execution context is the object foo,
which was used to invoke that method. This results in the output "Hello from the function scope!"
*/

/* 
4 - What built-in methods have we learned about that we can use to specify a 
function's execution context explicitly?
*/

/* 
The function methods are call and apply. The call method invokes a function and sets an explicit 
execution context. You can use call to do this for both methods and functions. You can add as many
arguments to the calal method invocation as the function needs.

apply is similar but the difference is that apply uses an array to pass arguments to the
function. It is not needed nowadays, as you can use call and the spread operator to achieve
the same thing.
*/

/* 
5 -  Use call to invoke the add method but with foo as execution context. What will this return?
*/
let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: "abc",
  b: "def",
  add: function () {
    return this.a + this.b;
  },
};

console.log(bar.add.call(foo)); // logs 3
// we invoke call on bar.add with foo as the explicit execution context. this means the add method
// uses foo.a and foo.b, not bar.a and bar.b, to get the results. thus foo.a + foo.b returns 3.
