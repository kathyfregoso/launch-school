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

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      return `${this.name} is a ${this.year} student`;
    },

    addCourse(newCourse) {
      return this.courses.push(newCourse);
    },

    listCourses() {
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

      getCourse(courseCode) {
        return this.courses.find(course => course.code === courseCode);
      },
    };
}

const school = {
  students: [],

  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },
  

  enrollStudent(studentName, courseName, courseCode) {
    this.getStudent(studentName).addCourse({
      name: courseName,
      code: courseCode,
    });
  },

  getStudent(studentName) {
    return this.students.find(student => student.name === studentName);
  },

  addGrade(studentName, courseCode, grade) {
    this.getStudent(studentName).getCourse(courseCode).grade = grade;
  },

  getReportCard(studentName) {
    this.getStudent(studentName).courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    let getCourse = (student, courseName) => {
      return student.listCourses().find(course => {
        return course.name === courseName;
      });
    };

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${student.grade}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${average}`);
    }
  },

};

console.log("foo:");
school.addStudent("foo", "3rd");
school.enrollStudent("foo", "Math", 101);
school.enrollStudent("foo", "Advanced Math", 102);
school.enrollStudent("foo", "Physics", 202);
school.addGrade("foo", 101, 95);
school.addGrade("foo", 102, 90);
school.getReportCard("foo");
console.log("");

console.log("bar:");
school.addStudent("bar", "1st");
school.enrollStudent("bar", "Math", 101);
school.addGrade("bar", 101, 91);
school.getReportCard("bar");
console.log("");

console.log("qux:");
school.addStudent("qux", "2nd");
school.enrollStudent("qux", "Math", 101);
school.enrollStudent("qux", "Advanced Math", 102);
school.addGrade("qux", 101, 93);
school.addGrade("qux", 102, 90);
school.getReportCard("qux");
console.log("");

school.courseReport("Math");
console.log("");
school.courseReport("Advanced Math");
school.courseReport("Physics");