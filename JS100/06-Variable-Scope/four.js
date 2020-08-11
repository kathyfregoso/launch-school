function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// Logs a; the if statement's inner scope has access to the outer scope, including the variable a, which is defined in the function's scope.