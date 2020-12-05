// refactor so classes all use a common superclass and inherit behavior as needed
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model, wheels = 4) {
    super(make, model, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, wheels = 2) {
    super(make, model, wheels);
  }
}

class Truck extends Vehicle {
  constructor(make, model, wheels = 6, payload) {
    super(make, model, wheels);
    this.payload = payload;
  }
}

let toyota = new Car("toyota", "corolla");
console.log(toyota.info());
console.log(toyota.getWheels());

let fordTruck = new Truck("ford", "F-150");
console.log(fordTruck.info());
console.log(fordTruck.getWheels());

let harleyDavidson = new Motorcycle("harley-davidson", "v-rod");
console.log(harleyDavidson.info());
console.log(harleyDavidson.getWheels());
