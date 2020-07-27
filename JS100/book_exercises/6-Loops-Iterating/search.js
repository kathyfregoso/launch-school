let arr = [3,1,5,9,2,6,4,7];
let indexFive = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    indexFive = i;
    break;
  }
}

console.log(indexFive);