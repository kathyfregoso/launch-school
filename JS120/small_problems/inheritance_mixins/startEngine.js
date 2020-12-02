// part 1
// Change the code so that creating a new Truck automatically invokes startEngine.

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   // automatic invocation of a method or prop requires constructor w/ super invoc. in subclass
//   constructor(year) {
//     super(year);
//     this.startEngine();
//   }

//   startEngine() {
//     console.log("Ready to go!");
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

/*
when using class inheritance, it's possible for methods to overlap. It's easy to shadow
an inherited method. For ex, if startEngine existed in both Vehicle superclass and Truck subclass.
If we invoked method w/ instance truck.startEngine(), JS executes the method from Truck class
instead of method w/ same name (startEngine) in the Vehicle class. Any function can be added to
an object in the form of a property. Thus, once we've defined prop startEngine in Truck class,
we have shadowed (overrided) the property from Vehicle class.

What if we want to shadow a property, but still have access to functionality from a parent class? 
JavaScript provides a reserved word for this: super.

when you invoke super w/in a constructor, it appears alone and must be used before the this
keyword is used. however, super keyword can also be used to call funcs. on the object's 
parent and we'll see that in part 2
*/

// part 2
// modify the Truck class so that the code below displays the indicated output
// make use of startEngine method in Vehicle class

class Vehicle {
  startEngine() {
    return "Ready to go!";
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    // super keyword used to call method on the object's parent
    // this way we use some functionality from parent class Vehicle in Truck class
    // advantage over prototype based inheritance
    return super.startEngine() + ` Drive ${speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine("fast")); // Ready to go! Drive fast, please!

let truck2 = new Truck();
console.log(truck2.startEngine("slow")); // Ready to go! Drive slow, please!
