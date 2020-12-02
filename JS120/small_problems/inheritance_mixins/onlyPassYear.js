class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

// we added constructor to Truck instead of modifying constructor in Vehicle cause
// we didn't want Car to accept the bedType parameter
class Truck extends Vehicle {
  // to keep year prop in Vehicle, we need to use super in subclass
  constructor(year, bedType) {
    // only need to pass one arg year instead of all
    super(year);
    this.bedType = bedType; // points to Truck class upon invocation
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, "Short");
console.log(truck1.year); // 2003
console.log(truck1.bedType); // Short
