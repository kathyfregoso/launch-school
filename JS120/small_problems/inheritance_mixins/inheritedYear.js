// 1 - Using this code to create 2 classes, Truck and Car, that both inherit from Vehicle.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

// classes w/ similar behaviors can inherit from a superclass, ie Vehicle
// superclass Vehicle implements the common behaviors while the inheriting class invokes them
// extends keyword denotes inheritance btw classes
class Truck extends Vehicle {}

class Car extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015
