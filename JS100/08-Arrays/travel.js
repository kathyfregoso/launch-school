let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains (value, array) {
  return console.log(array.indexOf(value) >= 0); // if value is not in the arr, returns -1 (ie. false)
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

// the indexOf method uses strict equality === to compare the input value to all els in the array, returns the index of value if found.
// this method only works for primitive types like strings (not objects)