let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObj = Object.create(myProtoObj);

newObj.qux = 3;

// snippet 1 - iterates through object's own properties only
// logs only qux
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// snippet 2 - iterates over all of the object's keys, including the keys inherited from the prototype object (parent object), myProtoObj
// logs qux, foo, and bar
for (let key in myObj) {
  console.log(key);
}