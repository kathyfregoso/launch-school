let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};
nestedArray.forEach(el => {
  obj[el[0]] = el[1];
})

console.log(obj);

// you can also use Object.fromEntries(nestedArray), which transforms a list of key-value pairs into an object