console.log(greeting); // has access to the hoisted var variable declaration, but not it's assigned value

var greeting = 'Hello world!';

// will log 'undefined', because the log is run before the variable is assigned a value on line 3, even though var variable declarations are hoisted (moved virtually to the beginning of the scope).