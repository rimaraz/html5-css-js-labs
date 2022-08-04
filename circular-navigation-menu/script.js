let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
const list = document.querySelectorAll('li');

function activeLink() {
  list.forEach(item => {
    item.classList.remove('active');
    this.classList.add('active')
  })
}

function addEvents() {
  menuToggle.addEventListener('click', ()=> {
    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
  });

  list.forEach(item => {
    item.addEventListener('click', activeLink)
  })
}

addEvents();