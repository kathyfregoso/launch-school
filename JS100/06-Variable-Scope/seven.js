let a = 1; // global scope, accessible from everywhere in our code

function myFunction() {
  console.log(a);
}

myFunction();

// logs 1, because the inner scope of myFunction has access to the outer scope of variable a