'use strict'

const width = window.innerWidth;
const dropdown = document.querySelector('#contact-drop-id');
const arrow = document.querySelector('#contact-arrow');
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

arrow.addEventListener('click', () => {
  if (dropdown.classList[0].includes('hide')) {
    dropdown.classList.remove('hide')
    dropdown.classList.add('contact-drop')
  } else if (dropdown.classList[0].includes('contact-drop')) {
    dropdown.classList.remove('contact-drop')
    dropdown.classList.add('hide')
  }
})

menuIcon.addEventListener('click', () => {
  if (menuIcon.getAttribute('name') === 'menu-outline') {
    navList.style.display = 'block';
    menuIcon.setAttribute('name', 'close-outline');
  } else if (menuIcon.getAttribute('name') === 'close-outline') {
    navList.style.display = 'none';
    menuIcon.setAttribute('name', 'menu-outline');
  }
  

});
