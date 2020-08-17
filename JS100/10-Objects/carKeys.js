let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

console.log(Object.keys(vehicle)); // outputs [ 'manufacturer', 'model', 'year', 'range', 'seats' ]
// the Object.keys() property returns an array with an object's own enumerable property names

// this does the same:

let keys = [];

for (let prop in vehicle) {
  keys.push(prop);
}

console.log(keys);