const ulCategoriesEl = document.querySelector('ul#categories');
const liItemEl = ulCategoriesEl.querySelectorAll('li.item');
console.log(`Number of categories: ${liItemEl.length}`);
liItemEl.forEach((item) => {
  const elH2 = item.querySelector('h2');
  const elItem = item.querySelectorAll('li');

  console.log(`\nCategory: ${elH2.textContent}`);
  console.log(`Elements: ${elItem.length}`);
});
