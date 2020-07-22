const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// no error, the console logs the string 'bar' from line 1 because it is in the global memory and scope.