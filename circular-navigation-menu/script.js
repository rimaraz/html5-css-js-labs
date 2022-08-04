let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

menuToggle.addEventListener('click', ()=> {
  menu.classList.toggle('active')
  menuToggle.classList.toggle('active')
})