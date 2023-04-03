'use strict'

const dropdown = document.querySelector('#contact-drop-id');
const arrow = document.querySelector('#contact-arrow');

arrow.addEventListener('click', () => {
  if (dropdown.classList[0].includes('hide')) {
    dropdown.classList.remove('hide')
    dropdown.classList.add('contact-drop')
  } else if (dropdown.classList[0].includes('contact-drop')) {
    dropdown.classList.remove('contact-drop')
    dropdown.classList.add('hide')
  }
})

console.log(arrow);

if (dropdown.classList[0].includes('contact-drop')) {
  console.log('true!')
}


