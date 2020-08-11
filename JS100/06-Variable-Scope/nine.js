const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // the argument is ignored in the function body

// logs 'TypeError: assignment to constant variable' because we cannot reassign the value of a var declared with const