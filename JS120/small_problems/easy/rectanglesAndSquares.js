class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width;
  }
}

// write a class called Square that inherits from Rectangle

class Square extends Rectangle {
  constructor(lengthOfSide) {
    // super keyword accesses and calls functions on the superclass
    // here it calls the superclass with lengths
    // provided for the Rectangle's width and height
    super(lengthOfSide, lengthOfSide);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
