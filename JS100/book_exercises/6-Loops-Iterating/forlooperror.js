for (let i = 0; i < 5;) {  // this code does not produce an error because the variable is simply incremented on line 2 rather than inside the for loop ()
  console.log(i += 1); // increments i by 1 before logged
}

// outputs:
// 1
// 2
// 3
// 4
// 5

