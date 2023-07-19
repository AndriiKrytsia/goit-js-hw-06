const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', (dataAtributes));
function dataAtributes(evt) {
  evt.preventDefault();

  const { email, password } = evt.target.elements;

  if (email.value === '' || password.value === '') {
    return alert('всі поля повинні бути заповнені')
  }

  const data = {
    email: email.value,
    password: password.value
  }
console.log(data);
inputForm.reset()

}