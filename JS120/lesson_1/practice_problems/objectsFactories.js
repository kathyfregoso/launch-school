// 1 - create objects

// let book1 = {
//   title: "Mythos",
//   author: "Stephen Fry",

//   getDescription() {
//     console.log(`${this.title} was written by ${this.author}.`);
//   },
// };

// let book2 = {
//   title: "Me Talk Pretty One Day",
//   author: "David Sedaris",

//   getDescription() {
//     console.log(`${this.title} was written by ${this.author}.`);
//   },
// };

// let book3 = {
//   title: "Aunts aren't Gentlemen",
//   author: "PG Wodehouse",

//   getDescription() {
//     console.log(`${this.title} was written by ${this.author}.`);
//   },
// };

// book1.getDescription();
// book2.getDescription();
// book3.getDescription();

// 2 - is there unnecessary code? Does it have duplication?

/*
Yes, there is plenty of duplication between the book objects. Since they all are the 
same type of object, there is no need to manually copy and paste the same properties for 
each book, including the getDescription method. They do hold unique values for their title
and author properties.
*/

// 3 - factory function

// function createBook(title, author) {
//   return {
//     // you can use shorthand notation when the property and variable have the same name
//     title, // same as `title: title,`
//     author, // same as `author: author,`

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//   };
// }

// 4 - add read parameter (optional) with initial value of false

// function createBook(title, author) {
//   return {
//     title,
//     author,
//     read: false,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//   };
// }

// book1.getDescription(); // "Mythos was written by Stephen Fry."
// book2.getDescription(); // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription(); // "Aunts aren't Gentlemen was written by PG Wodehouse"

// 5 - add a book we've already read and use an optional read parameter with a default value of false

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//   };
// }

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);
// console.log(book4.read);

// 6 - add a method, readBook, that marks a book obj as read by setting read property to true

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },

//     readBook() {
//       this.read = true;
//     },
//   };
// }

// let book1 = createBook("Mythos", "Stephen Fry", false);
// let book2 = createBook("Me Talk Pretty One Day", "David Sedaris", false);
// let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse", false);
// let book4 = createBook(
//   "The Invisible Life of Addie LaRue",
//   "V.E. Schwab",
//   true
// );

// console.log(book1.read); // false
// book1.readBook();
// console.log(book1.read); //  true

// 7 - update getDescription function to reflect the read state directly

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      if (this.read === false) {
        console.log(
          `${this.title} was written by ${this.author}. I haven't read it.`
        );
      } else {
        console.log(
          `${this.title} was written by ${this.author}. I have read it.`
        );
      }
    },

    readBook() {
      this.read = true;
    },
  };
}

// alternative syntax for getDescription using template literal:

// getDescription() {
//   return `${this.title} was written by ${this.author}. ` +
//          `I ${this.read ? 'have' : "haven't"} read it.`;
// },

let book1 = createBook("Mythos", "Stephen Fry", false);
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris", false);
let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse", false);
let book4 = createBook(
  "The Invisible Life of Addie LaRue",
  "V.E. Schwab",
  true
);

book1.getDescription();
book2.getDescription();
book3.getDescription();
book4.getDescription();
