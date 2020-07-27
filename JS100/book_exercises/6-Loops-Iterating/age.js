let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?"));
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let x = 10; x <= 40; x += 10) {
  console.log(`In ${x} years, you will be ${age + x} years old.`);
}

