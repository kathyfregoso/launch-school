function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  return (checkKeyMatches(obj1, obj2) && checkValueMatches(obj1, obj2))

}

// checks if obj keys are the same
function checkKeyMatches(obj1, obj2) {
  // also works with Object.getOwnPropertyNames
  let aKeys = Object.keys(obj1).sort(); 
  let bKeys = Object.keys(obj2).sort();
  
  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key, index) => key === bKeys[index]);
}

// checks if obj values are the same
function checkValueMatches(obj1,obj2) {
  let aValues = Object.values(obj1).sort();
  let bValues = Object.values(obj2).sort();

  if (aValues.length !== bValues.length) return false;

  return aValues.every((value, index) => value === bValues[index]);
}

// alternative checkValueMatches helper function:
// function valuesMatch(a, b) {
//   let aKeys = Object.getOwnPropertyNames(a).sort();

//   return aKeys.every(key => a[key] === b[key]);
// }

// alternative solution to check equality of objects:
// function objectsEqual(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//   return Object.keys(obj1).every((key) => {
//     return obj2.hasOwnProperty(key) && (obj2[key] === obj1[key]);
//   })
// }


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// *note: this function doesn't work for deep equality. so if one of the values in an object
// is an object in both objects, this will return false unless that object is identical in 
// both objects