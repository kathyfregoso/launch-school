// this code results in an error. what is the problem? why?

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          // the morning, afternoon, and evening property passed into template literal 
          // did not have context upon the invocation of greet
          // we added the `this` keyword to access properties of the object returned by
          // the createGreeter function
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          // the reason `name` works (along with this.name) works is because of closure
          // this solution would pose a problem if you ever want to change the name
          // property after creating it
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // triggers `ReferenceError: morning is not defined`
// supposed to return `Good Morning Victor`