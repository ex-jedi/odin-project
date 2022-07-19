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
  console.log(count);
  wrapper.insertAdjacentHTML('beforeend', newElement);
  count += 1;
}

addElementButton.addEventListener('click', addItem);
