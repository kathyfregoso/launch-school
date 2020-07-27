let counter = 0;

while (counter = 1) { // always returns a truthy value of 1, and never becomes false, therefore the test on line 7 never becomes true 
  console.log(counter);
  counter += 1; 

  if (counter > 2) { // the value of counter ill always equal 2 when this line is executed
    break;
  }
}

