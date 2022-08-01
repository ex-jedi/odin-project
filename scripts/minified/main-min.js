/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
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
    console.log(this.name);
  };
}

const playerOne = new Player('Dug', 'X');
console.log(playerOne.name);

const heading = document.querySelector('H1');
console.log(heading);


/******/ })()
;
//# sourceMappingURL=main-min.js.map