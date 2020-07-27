let names = ['Kathy', 'Tyler', 'Joy', 'Harry', 'Anabelle'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
  index++;
}

console.log(upperNames);