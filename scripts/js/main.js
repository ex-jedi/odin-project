// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

const myObject = {
  property: 'Value',
  anotherProperty: 88,
  method() {
    // Stuff
  },
};
// Dot notation
console.log(myObject.anotherProperty);

// Dot notation
// eslint-disable-next-line dot-notation
console.log(myObject['anotherProperty']);

// Object constructor

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const playerOne = new Player('Dug', 'X');
const playerTwo = new Player('Jen', 'O');

console.log(playerOne.name);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype = {
  info() {
    return `${this.title} by ${this.author} - ${this.pages} pages.`;
  },
  haveIRead() {
    return ` I have ${this.read ? 'read' : 'not yet read'} ${this.title}.`;
  },
};

const bookOne = new Book('Dune', 'Frank Herbert', 999, true);
const bookTwo = new Book('The Silmarillion', ' J. R. R. Tolkien', 365, false);
