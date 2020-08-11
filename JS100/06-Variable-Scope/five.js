function myFunction() {
  let a = 1;

  if (true) {
    console.log(a); // returns "ReferenceError" cause variables declared by let aren't available until code runs 
    let a = 2; // creates a new var that isn't available on line 5; technically let variables are hoisted by go to a newly created "temporal dead zone", where they have no value (not even "undefined")
    console.log(a); // shadows var a defined on line 2
  }
}

myFunction();
