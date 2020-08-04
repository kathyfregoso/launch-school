function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething("Anabelle is a small tabby cat"));

// this code joins several array methods:
// 1. it splits the string sentence into an array of words (elements) with the .split(' ') method. the single space character delimits the words in the og string.
// 2. it reverses the array elements with the .reverse() method
// 3. it uses the .map() method to iterate through the array, which returns a new array where each element is the length of the corresponding word