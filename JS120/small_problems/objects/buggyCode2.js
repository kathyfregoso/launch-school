// groc store uses a JS function to calculate discounts on various items
// testing out various percentage discounts but gets unexpected results
// why aren't we getting expected discount prices from function?
// modify the code so it works

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
  // the discount method mutates the item object
  // since objects are mutable, changes made to the prop of the item obj
  // are compounded every time the discount method is called
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     this.price -= discount;
    
//     return this.price;
//   },
// };

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  // modified the code so that we aren't mutating item on every method call
  // added an param to pass the item object as an argument
  discount: function(item, percent) {
    let discount = item.price * percent / 100;
    return item.price - discount;
  },
};

console.log(item.discount(item, 20));   // should return 40
// // = 40
console.log(item.discount(item, 50));  // should return 25
// // = 20
console.log(item.discount(item, 25))   // should return 37.5
// = 15