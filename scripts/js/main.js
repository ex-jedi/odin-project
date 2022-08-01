// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

const addElementButton = document.querySelector('.add-element-button');
let count = 6;
const wrapper = document.querySelector('.wrapper');

function addItem() {
  const newElement = document.createElement('div');
  newElement.classList.add('items', 'appear');
  newElement.innerText = count;
  wrapper.insertAdjacentElement('beforeend', newElement);
  count += 1;
}

addElementButton.addEventListener('click', addItem);

function removeItem(e) {
  // Get element which was clicked on
  const targetElement = e.target;
  // If it's an item, delete it
  if (targetElement.className === 'items') {
    targetElement.remove();
  }
  // Get remaining Elements
  const itemsList = document.querySelectorAll('.items');
  // Loop through them
  itemsList.forEach((item, index) => {
    // Remove the appear class so the animation doesn't trigger
    item.classList.remove('appear');
    // Add event listener to remove the animate class after the animation runs
    item.addEventListener('animationend', () => item.classList.remove('animate'), { once: true });
    // Add the animate class (it'll be removed after it runs )
    item.classList.add('animate');
    // Add the new items count to each item
    item.innerText = index + 1;
  });
}

wrapper.addEventListener('click', removeItem);
