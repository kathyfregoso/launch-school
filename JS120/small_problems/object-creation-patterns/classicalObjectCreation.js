function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.eat = function () {
  console.log("Eating");
};

Person.prototype.communicate = function () {
  console.log("Communicating");
};

Person.prototype.sleep = function () {
  console.log("Sleeping");
};

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

let person = new Person("foo", "bar", 21, "gender");
console.log(person instanceof Person); // logs true
person.eat(); // logs 'Eating'
person.communicate(); // logs 'Communicating'
person.sleep(); // logs 'Sleeping'
console.log(person.fullName()); // logs 'foo bar'

function Doctor(firstName, lastName, age, gender, specialty) {
  // call allows you to call Person supertype in the current context
  // first param this specifies the context when func is invoked
  // since we want Doctor to take the same params as the Person() constructor it inherits from,
  // we specify them all as params in the call invocation
  Person.call(this, firstName, lastName, age, gender);
  // we add new property specialty, which is specific to Doctor subclass
  this.specialty = specialty;
}

// use Object.create to create a new object (Doctor.prototype) that has a Person.prototype
// as its prototype and will inherit all methods available on Person.prototype
Doctor.prototype = Object.create(Person.prototype);
// make sure constructor is reassigned to Doctor; if you don't, it points to Person
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function () {
  console.log(`Diagnosing`);
};

let doctor = new Doctor("foo", "bar", 21, "gender", "Pediatrics");
console.log(doctor instanceof Person); // logs true
console.log(doctor instanceof Doctor); // logs true
doctor.eat(); // logs 'Eating'
doctor.communicate(); // logs 'Communicating'
doctor.sleep(); // logs 'Sleeping'
console.log(doctor.fullName()); // logs 'foo bar'
doctor.diagnose(); // logs 'Diagnosing'

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log(`Teaching`);
};

function Student(firstName, lastName, age, gender, bachelors) {
  Person.call(this, firstName, lastName, age, gender);
  this.bachelors = bachelors;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log(`Studying`);
};

function GraduateStudent(firstName, lastName, age, gender, bachelors, masters) {
  Student.call(this, firstName, lastName, age, gender, bachelors);
  this.masters = masters;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function () {
  console.log(`Researching`);
};

let graduateStudent = new GraduateStudent(
  "foo",
  "bar",
  21,
  "gender",
  "BS Industrial Engineering",
  "MS Industrial Engineering"
);
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat(); // logs 'Eating'
graduateStudent.communicate(); // logs 'Communicating'
graduateStudent.sleep(); // logs 'Sleeping'
console.log(graduateStudent.fullName()); // logs 'foo bar'
graduateStudent.study(); // logs 'Studying'
graduateStudent.research(); // logs 'Researching'
