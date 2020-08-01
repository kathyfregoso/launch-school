let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddVal = arr.reduce((acc,curr) => {
  let length = curr.length;
  if (length % 2 !== 0) {
    acc.push(length);
  }
  return acc;
},[])

console.log(oddVal); // => [1, 5, 3]