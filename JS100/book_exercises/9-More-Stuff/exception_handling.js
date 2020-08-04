let names = ['kathy', 'tyler', 'joy', 'harry', undefined, 'anabelle'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong.');
  }
});

// Log output
// kathy's name has 5 letters in it.
// tyler's name has 5 letters in it.
// joy's name has 3 letters in it.
// harry's name has 5 letters in it.
// Something went wrong.
// anabelle's name has 8 letters in it.