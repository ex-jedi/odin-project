// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================
const widthDiv = document.querySelector('.clamp-div');
widthDiv.getBoundingClientRect();
console.log('🚀 ~ file: main.js ~ line 10 ~ widthDiv.getBoundingClientRect()', widthDiv.getBoundingClientRect());
widthDiv.innerHTML = `
<p>Width = ${widthDiv.getBoundingClientRect().width.toFixed()}px.</p>
`;
window.addEventListener('resize', () => {
  widthDiv.innerHTML = `
<p>Width = ${widthDiv.getBoundingClientRect().width.toFixed()}px.</p>
`;
});
