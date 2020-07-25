function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); 

// doesn't log anything; return terminates the function early

/////////////////////////////////////////////

function scream2(words) {
  return words + '!!!!';
}

scream('Yipeee');

// scream2 doesn't log anything, the function returns a value but nothing is logged to the console