let counter = 0;

// since this condition is never true (and because the condition is eval. before execution), the statement is never executed and nothing is logged
while (counter > 0) { 
  console.log('Woooot!');
  counter -= 1;
}

/////

let counter = 0;

do {
  console.log('Woooot!'); // this is logged
  counter -= 1; // the counter variable is decreased by 1
} while (counter > 0); // the condition is evaluated after the statement is executed