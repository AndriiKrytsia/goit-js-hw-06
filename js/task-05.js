const inputName = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  spanOutput.textContent = event.currentTarget.value || 'Mykola is best teacher';
});