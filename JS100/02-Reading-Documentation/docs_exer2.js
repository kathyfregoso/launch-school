// STYLE GUIDE //

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
    console.log('Drip...');
    iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');


// DATA TYPES //

/*
Primitive Data Types: numbers, strings, booleans, null, undefined, BigInt, symbols

MDN Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/


// LARGEST NUMBER //

Number.MAX_VALUE;

// ARITHMETIC OPERATOR PRECEDENCE 

4 * 5 + 3 ** 2 / 10
// logs 20.9

// order of precedence: 
// 1. exponentiation ** (right-to-left)
// 2. multiplication, division, and remainder *, /, % (left-to-right)
// 3. addition and subtraction +, - (left-to-right)


// DATE

Date.now() // 1596662729576
// this static method returns the number of milliseconds ellapsed since January 1, 1970 00:00:00 UTC


// WHICH YEAR IS THIS? //

let today = new Date();

today.getYear(); // returns the year in the specified date according to local time; returns the current year minus 1900 (two digit return) - not the full year
today.getFullYear(); // returns the four-digit year number

// today.getYear() is no longer used because it does not return full years; use today.getFullYear() instead


// ARGUMENT SIGNATURES //

// Array.prototype.join() does not expect any arguments, but it takes 1 optional parameter
// if provided, the separator parameter (specifies a string to separate each pair of adjacent els.) is optional
// if not argument is provided, the array elements are separated with a comma


// STRING CONCATENATION //

let str = "Hello";
let str2 = "world";
let arr = ['fire', 'air', 'water'];

console.log(str.concat(" ", str2)); // concat() method concatenates the string arg. to the calling string and returns a new string
console.log(str + " " + str2); // use the + operator 
console.log(arr.join(' ')); // creates and returns new string by concatenating all of the elements in an array or array like object, separated by commas (default) or specified separator string
console.log(`${str} ${str2}`); // template literal


// SYNTAXERROR //

// SyntaxError: Unexpected token &&
// this error occurs when a specific language construct was expected but something else was provided
// in this if statement, the block condition on line 77 was not wrapped in a grouping operator (parens)
// I removed excess parentheses from the complex expression

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && currentSpeed - speedLimit > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}


// TYPEERROR //

// the typeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type
// length is a read-only property of a String object, and not an instance method that can be invoked on a string, therefore, it does not need the parenthesis at the end

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}



