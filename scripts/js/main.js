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
