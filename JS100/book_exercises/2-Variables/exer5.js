let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// this code logs 'bar' to the console because the line 1 variable declaration is in the global scope.