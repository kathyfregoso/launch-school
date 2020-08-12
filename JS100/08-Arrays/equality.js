let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// I would say this outputs FALSE because the variables reference two different arrays that happen to have the same element values.
// Since both arrays are objects, strict equality returns true only if they refer to the same object.