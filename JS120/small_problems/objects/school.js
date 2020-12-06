/* 
create a school object. the school object uses the student object from the previous  exercise.
it has methods that use and update info from the student. implement the following methods 
on the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of 
students. The method adds a constraint that the year can only be any of the following values: 
'1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it 
logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it 
uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades 
are part of the course report

To test your code, use the three student objects listed below. Using the three student objects, 
produces the following values from the getReportCard and courseReport methods respectively.
*/

// Examples of created student objects with grades; methods on the objects are not shown 
// here for brevity.
// The following are only showing the properties that aren't methods for the three objects

function school() {
  return {
    students: [],

    addStudent(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(name.year)) {
        let student = createStudent(name, year);
        this.students.push(student);
        return student;
      } else {
        console.log('Invalid Year')
        return 'Invalid Year';
      }
      
    },

    enrollStudent() {
      // stub
    },

    addGrade() {
      // stub
    },

    getReportCard() {
       // stub
    },

    courseReport() {
       // stub
    },
  }
}

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
      return `${this.name} is a ${this.year} student`;
    },

    addCourse(newCourse) {
      return this.courses.push(newCourse);
    },

    listCourses() {
      console.log(this.courses)
      return this.courses;
    },

    addNote(code, note) {
      let course = this.courses.find(course => course['code'] === code);

      if (course) {
        if (course['note']) {
          course['note'] += "; " + note;
        } else {
          course['note'] = note;
        }
      } 
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course['note']) {
          console.log(`${course['name']}: ${course['note']}`)
        }
      });
    },

    updateNote(code, note) {
      let course = this.courses.find(course => course['code'] === code);

      if (course) {
        course['note'] = note;
        }
      },
    };
}

let foo = createStudent('Foo', '1st');
foo.info(); // "Foo is a 1st year student"
foo.listCourses(); // []
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses(); // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes(); // "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes(); 
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

// foo
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics'); // undefined