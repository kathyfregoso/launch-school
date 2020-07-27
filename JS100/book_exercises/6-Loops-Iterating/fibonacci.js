function fibonacci(num) {
  if (num < 2) { // base case: returns a concrete value that gets reused as the code unwinds the recursive calls
    return num;
  } else {
    // calls itself twice
    // each call uses the prev. return values to calculate the intermediate result that gets returned in the next step
    return fibonacci(num - 1) + fibonacci(num - 2); 
  }
}

console.log(fibonacci(6))