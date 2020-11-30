/*
If we have a `Car` class and a `Truck` class, how can you use the `Speed` object
as a mix-in to make them `goFast`? How can you check whether your `Car` or
`Truck` can now go fast?
*/

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  },
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
Object.assign(Truck.prototype, Speed);

let toyotaTruck = new Truck();
toyotaTruck.goFast();

let nissan = new Car();
nissan.goFast();

console.log(nissan.constructor.name);

// check that constructor subclass contains goFast
console.log(Truck.prototype.hasOwnProperty("goFast")); // true
console.log(Car.prototype.hasOwnProperty("goFast")); // true

/*
2 - In the last question, we used a mix-in named Speed that contained a goFast
method. We included the mix-in in the Car class and then called the goFast
method from an instance of the Car class. You may have noticed that the
string printed when we call goFast includes the name of the type of vehicle
we are using. How is that done?
*/

/*
constructor property references a Function object that has a name property:
(constructor.name)

Using this.constructor.name:
1. Upon invocation, we get the context of goFast, either Car or Truck.
2. The constructor property of the object points to the constructor (class)
that the object belongs to (Car or Truck).
3. Constructors have a name property that contains the name of the class
as a string, which is included in the output of goFast.
*/

/*
3 - Ben and Alyssa are working on a vehicle management system.

Thus far, they have created classes named Auto and Motorcycle to represent
automobiles and motorcycles.

After they noticed that the information
and calculations performed was common to both vehicle types, they decided
to break out the commonality into a separate class named WheeledVehicle.

Their code, thus far, looks like this:
*/

// class WheeledVehicle {
//   constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
//     this.tires = tirePressure;
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }

//   range() {
//     return this.fuelCap * this.fuelEfficiency;
//   }
// }

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30, 30, 32, 32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20, 20], 80, 8.0);
//   }
// }

// // Their boss now wants them to incorporate a new type of vehicle:
// // a Catamaran.

// class Catamaran {
//   constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
//     // catamaran specific logic

//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//   }
// }

/*
This new class doesn't fit well with our existing class hierarchy:
Catamarans don't have tires, and aren't wheeled vehicles.
However, we still want to share the code for tracking fuel efficiency and range.
Modify the class definitions and move code into a mix-in, as needed, to share
code between the Catamaran and the wheeled vehicle classes.
*/

// code shared by Catamaran and WheeledVehicle moved to Transportation mix-in
const Transportation = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  },
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}
Object.assign(WheeledVehicle.prototype, Transportation);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30, 30, 32, 32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20, 20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}
Object.assign(Catamaran.prototype, Transportation);

let toyota = new Auto();
console.log(toyota.range());
