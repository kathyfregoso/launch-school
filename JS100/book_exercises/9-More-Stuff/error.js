function foo() {
  console.log(bar);
}

foo();

// ERROR 
// ReferenceError: bar is not defined
// at foo (error.js:2:15)
// at Object.<anonymous> (error.js:5:1)

// from the stack trace, we can see that JavaScript detected the error at character 15 on line 2 in the foo function
// the rest of the trace tells us that we called foo on line 5 from an anonymous function (global function)