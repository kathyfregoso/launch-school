// 1 - Use a factory function to create pet objects:
// function createPet(animal, name) {
//   return {
//     animal,
//     name,
//     sleeping: false,

//     sleep() {
//       this.sleeping = true;
//       console.log(`I am sleeping`);
//     },

//     wake() {
//       this.sleeping = false;
//       console.log(`I am awake`);
//     },
//   };
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake(); // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake(); // I am awake

// 2 - use OLOO to create pet objects:

let PetPrototype = {
  sleep: function () {
    this.sleeping = true;
    console.log(`I am sleeping`);
  },

  wake: function () {
    this.sleeping = false;
    console.log(`I am awake`);
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    this.sleeping = false;
    return this;
  },
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake(); // I am awake

// 3 - consider objects create by 1 and 2. How do objects for the same animal differ?

/* 
OLOO stores all common properties for pet into a prototype, PetPrototype. Instance methods and properties
are created using the init method on the prototype object. All objects inherit methods and
properties from this prototype object using the prototype chain.

The factory function, on the other hand, creates copies of all the methods (sleep and wake)
for each new object, which has a significant impact on performance. But objects created with
factory functions can have a private state. Any state stored in the body of a factory function
instead of in the returned object is private to the returned object. They can't be accessed
or modified unless one of the object methods exposes the state. W/ OLOO, there is no way to 
create a private state - all object state can be accessed and modified by outside code.
*/
