console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({ name: "Srdjan" }.constructor.name);

// The constructor property returns a reference to the Object constructor function that
// created the instance. This constructor function has access to `name` property,
// which returns the function's name as specified when it was created.
