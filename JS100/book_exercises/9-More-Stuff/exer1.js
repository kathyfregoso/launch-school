let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// logs [1, 4, 3] because both variables array1 and array2 point to/reference the same array in memory.