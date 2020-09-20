// INPUT: array with three nested subarrays

// OUTPUT: sorted nested array

// REQUIREMENTS:
// output order of nested subarrays is based on the sum of the odd numbers they contain
// ascending order (smallest to largest)

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [[1, 6, 7], [1, 5, 3], [1, 8, 3]] => [[1 + 7], [1 + 5 + 3], [1 + 3]] =>[[8], [9], [4]] =>
// 1 + 3 (4) < 1 + 7 (8) < 1 + 5 + 3 (9) =>
// [[4], [8], [9]] => [[1, 8, 3], [1, 6, 7], [1, 5, 3]]

// DATA STRUCTURES:
// arrays, integers

// ALGORITHMS:
// 1. create new array
// 2. create sum variable with value of 0
// 2. loop through arr
// 3. if sum of odd nums in curr sub-array is smaller than sum variable, add subarray to new array
// 4. exit loop once you reach the end of nested subarray
// 5. return new sorted array

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

function sortNestedArr(arr) {
  let newArr = [];
}
