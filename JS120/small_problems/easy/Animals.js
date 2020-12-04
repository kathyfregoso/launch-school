class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    // user super keyword to invoke that method on the object's parent
    return super.introduce() + ` Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    // super invokes constructor of parent class Animal
    // we need to pass 5 args to super (name, age, legs, species and status),
    // as this is how many arguments Animal constructor method takes.
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(
  cat.introduce() ===
    "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!"
);
// logs true
console.log(cat.introduce());

let dog = new Dog("Abra", 0.7, "happy", "Debi");
console.log(dog.introduce());
console.log(dog.greetMaster());
