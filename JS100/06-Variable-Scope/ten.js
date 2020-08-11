const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction(); // no return value; the function code only mutates (changes part of) the object referenced by the const variable a

console.log(a); // { firstName: 'Jane', lastName: 'Doe' }
