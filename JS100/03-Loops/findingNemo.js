const { array } = require("yargs");
const { bigIntLiteral } = require("@babel/types");

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length - 1; i++) {
  console.log(fish[i]);
}

// ALTERNATIVE SOLUTION

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
  if (fish[i] === "Nemo") break;
}