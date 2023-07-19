
const valueSpan = document.querySelector('#value');
const removeListenBtn = document.querySelector('[data-action="decrement"]');
const addListenBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

addListenBtn.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
})

removeListenBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
})