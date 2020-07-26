// refactor the following to an if statement:

// return foo() ? 'bar' : qux();

// refactored;

if (foo()) {
  return 'bar';
} else {
  return qux();
}