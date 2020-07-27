function doubler(num) {
  console.log(num);

  if(num <= 50) { // base case
    // recursive call; each invocation logs a new num, then calls itself w/ a new value twice that of the input number until the number is over 50
    doubler(num * 2); 
  }
}

doubler(5);