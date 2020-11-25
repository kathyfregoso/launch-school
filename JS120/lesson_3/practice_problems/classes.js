// 1 - What do we mean when we say that classes are first-class values?
// This means that classes can be assigned to a variable, returned from a function, and passed as an argument to other functions. They can be treated like
// any other value, and can be used anywhere a value can be used.

// 2 - Consider this class declaration:

class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

// What does the static modifier do? How do we call the method manufacturer?

// It adds a `static` method to the `Television` class. This means the method is defined directly on the class, not on objects created by the class.
// We call `manufacturer` using `Television.manufacturer()`
// `model` is an instance method that must be called using the `new` keyword, which is mandatory when using classes:

let tv = new Television();
tv.model();
