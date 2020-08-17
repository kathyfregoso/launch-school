// snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific'; // dot notation doesn't work when you need to access a variable assigned a key name; adds the string property 'prefix' to the ocean object

console.log(ocean); // outputs { prefix: 'Pacific' } 

// snippet 2:

let ocean = {};
let prefix = 'Indian';  

ocean[prefix] = 'Pacific'; // you must use bracket notation when accessing a variable containing a key name;e brackets accept expressions (in this case, a variable expression)

console.log(ocean); // outputs the ocean object with the variable prefix as the key: { Indian: 'Pacific' }