// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object
// as an array of object names. Here's an example output:

// name property added to make objects easier to identify
let foo = { name: "foo" };
let bar = Object.create(foo);
bar.name = "bar";
let baz = Object.create(bar);
baz.name = "baz";
let qux = Object.create(baz);
qux.name = "qux";

// solution 1:
// add ancestors method to built in Object.prototype
// we do this so all objects in the prototype chain have access to it
// result arrray incrementally built by recursively calling on the
// Object.prototype.ancestors method
// base case: ancestor doesn't have a name property anymore, so ancestor is Object.prototype
// when this happens, there are no more prototype objects to add
//  the value of this is the calling object

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, "name")) {
    return [ancestor.name].concat(ancestor.ancestors());
  }
  return ["Object.prototype"];
};

// solution 2:
// implement ancestors method as a mix-in and assign mixin to the foo object

// let ancestorsMixin = {
//   ancestors() {
//     let proto = Object.getPrototypeOf(this);

//     if (!proto.hasOwnProperty("name")) {
//       return ["Object.prototype"];
//     }

//     return [proto.name].concat(proto.ancestors());
//   },
// };

// let foo = { name: "foo" };
// Object.assign(foo, ancestorsMixin);

// let bar = Object.create(foo);
// bar.name = "bar";
// let baz = Object.create(bar);
// baz.name = "baz";
// let qux = Object.create(baz);
// qux.name = "qux";

// solution 3:
// using loop instead of recursion

// Object.prototype.ancestors = function () {
//   let ancestorsArr = [];
//   let context = this;

//   while (context !== Object.prototype) {
//     context = Object.getPrototypeOf(context);
//     if (!context.hasOwnProperty("name")) {
//       ancestorsArr.push("Object.prototype");
//     } else {
//       ancestorsArr.push(context.name);
//     }
//   }

//   return ancestorsArr;
// };

console.log(qux.ancestors()); // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors()); // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors()); // returns ['foo', 'Object.prototype']
console.log(foo.ancestors()); // returns ['Object.prototype']
