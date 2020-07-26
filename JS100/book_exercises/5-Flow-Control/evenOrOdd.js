function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('This is not a number');
    return;
  } 
  
  if (num % 2 === 0) {
    console.log('even');
  } else if (num % 2 !== 0) {
    console.log('odd');
  } 
}

evenOrOdd(5);
evenOrOdd(12);
evenOrOdd(false);