// 1. create class Person that accepts 1 arg for name prop when instantiated. if no args
// are provided, person object should instantiate w/ a name of 'John Doe'

class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

/* 
1. we used default params to set the default val of param to 'John Doe'.
*/
