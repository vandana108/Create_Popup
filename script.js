const button = document.querySelector('button');
const closeIcon = document.querySelector('.close-icon');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
  popup.classList.add('open')
})

closeIcon.addEventListener('click', () => {
  popup.classList.remove('open')
})
