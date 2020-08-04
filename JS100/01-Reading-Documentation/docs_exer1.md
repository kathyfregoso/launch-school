# Reading Documentation 1: Exercises


[Mozilla Development Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 

---

Yes, `String.prototype.toLowerCase()` according to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

---

JavaScript has no built in method to capitalize the first letter in a string, instead we can build a function to create that functionality:

`function firstUpperCase(string) { 
  return string[0].toUpperCase() + string.slice(1); 
}`

---

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is the documentation. 

Under the header "Common Operations", there is a sub-header called "Access an Array item using the index position". Here is one way to do this:

`let arr = ['fish', 'and', 'chips'];`

`arr[1];`

---

The console displays undefined, since the value on index 10 has not been set.

---


`let trees = ['birch', 'pine', 'sequoia', 'palm tree'];` 

`trees[trees.length - 1];` // Returns 'palm tree' 

`trees.pop();` // removes and returns the last element of the array: 'palm tree'

`trees[trees.length - 1];` // returns the new last element of the array: 'sequoia' 

---

`typeof 23.5;` // returns 'number'

`typeof 'Call me Ishmael.';` // returns 'string'

`typeof false;` // returns 'boolean'

`typeof 0;` // returns 'number'

`typeof null;` // returns 'object'

`typeof undefined;` // returns 'undefined'

---

`let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";`

`let words = tweet.split(' ');`

`let isValid = tweet.length < 140;`


`typeof tweet` // returns 'string'

`typeof words` // returns 'object'

`typeof isValid` // returns 'boolean'

---

`let tweet = 'Starting to get the hang of it... #javascript #launchschool';`

`tweet.split(' ')` // ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launschool']

`tweet.split(' ').reverse()` // ["#launchschool", "#javascript", "it...", "of", "hang", "the", "get", "to", "Starting"]

`tweet.split(' ').reverse().join(' ')` // '#launchschool #javascript it... of hang the get to Starting'

---

`'8' == 8;` // evaluates to 'true' because the equality operator converts the operands into the same type before making a comparison

`'8' === 8;` // evaluates to 'false' because the strict equality operator does not perform type coercion