console.log('5' + 10);

/* This logs '510' because implicit coercion turns the number 10 into a string and concatenates it to the string '5'. 
Every + expression that has a string operand to the left returns a string, even if the second operand is a number. */