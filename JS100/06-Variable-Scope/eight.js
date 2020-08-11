let a = 1;

function myFunction(a) { // variable shadowing: when a var within a certain scope has the same name as a var declared in outer scope
  console.log(a);
}

let b = 2;

myFunction(b);

// when the function is invoked, b's value of 2 is passed as an argument (replacing the "a" parameter variable, which does not reference the same value as var a on line 1)
// logs 2, because the myFunction checks its' local memory for the argument's assigned value 
