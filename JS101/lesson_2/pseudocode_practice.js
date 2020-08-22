// a function that returns the sum of two numbers

// create a function that accepts two numbers as the inputs
// inside this function, add the two arguments together and return the result

function sumTwo(num1,num2) {
  return num1 + num2;
}

console.log(sumTwo(12, 3));


// a function that takes an array of strings, and returns a string that is all those strings concatenated together

// INFORMAL
// create a function that accepts an array of strings as the input 
// inside the function, concatenate all the elements in the array with a ' ' separator using the join() method
// save that return value into a variable and use the return keyword to output the string value

// FORMAL
// START
// SET newString = array.join(' ')
// PRINT newString

function sentence(array) {
  let newString = array.join(' ');
  return newString;
}

console.log(sentence(['Hello', 'my', 'name', 'is', 'Anabelle', 'the', 'cat']));

// a function that takes an array of integers, and returns a new array with every other element

// INFORMAL
// create a function that accepts an array of integers as an argument
// declare a variable assigned the value of an empty array
// iterate through the array of integers one by one:
// - push the first value to the empty array
// - in each iteration, increment the index by 2 and push that index value to the new array
// - this skips every other number
// after iteration is complete, return the new array

// FORMAL
// START
// SET newArr = []
// SET iterator = 0
// WHILE iterator <= length of numbers
// newArr.push(iterator)
// iterator += 2
// PRINT newArr

function everyOther(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 2) {
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(everyOther([1,2,3,4,5,6,7,8,9,10]));