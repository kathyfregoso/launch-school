// what is logged on line 7?

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // logs NaN
/* 
It logs NaN, not 'Rick Sanchez'. Anywhere outside a function, the keyword `this` is bound to 
the global object. If the keyword is used inside a function, then its value depends on how the 
function is invoked.

Since global.firstName and global.lastName are not defined in the global object, the operation
being performed here is `undefined + undefined`, resulting in fullName having the value NaN.
*/
