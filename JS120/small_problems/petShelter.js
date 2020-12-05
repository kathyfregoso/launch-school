class Pet {
  constructor(breed, name) {
    this.breed = breed; // String collaborator object
    this.name = name; // String collaborator object
  }

  info() {
    return `a ${this.breed} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name; // collaborator String object
    this.pets = []; // collaborator Array object
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach((pet) => console.log(pet.info()));
  }
}

class Shelter {
  constructor() {
    this.adoptions = {}; // collaborator object
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.adoptions[owner.name]) {
      this.adoptions[owner.name] = owner;
    }
  }

  printAdoptions() {
    for (let name in this.adoptions) {
      console.log(`${name} adopted the following pet(s):`);
      this.adoptions[name].printPets();
      console.log("");
    }
  }
}

let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");
let anabelle = new Pet("cat", "Anabelle");

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");
let kfregoso = new Owner("K Fregoso");

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.adopt(kfregoso, anabelle);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pet(s).`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pet(s).`);
console.log(`${kfregoso.name} has ${kfregoso.numberOfPets()} adopted pet(s).`);

/* 
this exercise is about collaborator objects; instance variables don't have to be simple variables 
like numbers and strings, but can contain any object that might be needed. In this solution, the Pet
class has 2 String collaborator objects, Owner has a String and an Array of Pet objects, and Shelter
has an Object of Owner objects.
*/
