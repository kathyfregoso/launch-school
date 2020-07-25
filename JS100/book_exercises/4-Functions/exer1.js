let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // logs 1. 

// The foo function doesn't affect the value of bar on line 1 since JS functions have a local scope.

