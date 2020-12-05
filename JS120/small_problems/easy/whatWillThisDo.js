// what will this code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // 'ByeBye' - this returns the static method
console.log(thing.dupData()); // 'HelloHello' - this returns the instance method
