// Modify the implementation such that the expected result is returned. 
// Don't use the thisArg argument of Array.prototype.forEach.

// function myFilter(array, func) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function(value) {
    // explicitly sets func's context to thisArg upon invocation
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

let output = myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // should return [5, 6, 9]

console.log(output); // TypeError: Cannot read property 'indexOf' of undefined