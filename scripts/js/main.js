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
  itemsList.forEach((item, index) => {
    item.classList.remove('appear');
    item.addEventListener('animationend', () => item.classList.remove('animate'), { once: true });
    item.innerText = index + 1;
    item.classList.add('animate');
  });
}

wrapper.addEventListener('click', removeItem);
