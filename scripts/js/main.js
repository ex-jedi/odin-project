// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

const addElementButton = document.querySelector('.add-element-button');
let count = 6;

function addItem() {
  const wrapper = document.querySelector('.wrapper');
  const newElement = `<div class='added-div'>${count}</div>`;
  count++;
  console.log(count);
  wrapper.insertAdjacentHTML('beforeend', newElement);
}

addElementButton.addEventListener('click', addItem);
