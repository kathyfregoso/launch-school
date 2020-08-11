let a = 5;
let b = false; // not the same variable as one on line 5

if (a > 4) {
  let b = true; // new variable b created
}

console.log(b); // references the variable on LINE 2! scope of var on line 5 is not accessible by any outer scope

// logs false 