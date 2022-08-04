let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

menuToggle.addEventListener('click', ()=> {
  menu.classList.toggle('active')
  menuToggle.classList.toggle('active')
})

const list = document.querySelectorAll('li');

function activeLink() {
  list.forEach(item => {
    item.classList.remove('active');
    this.classList.add('active')
  })
}

list.forEach(item => {
  item.addEventListener('click', activeLink)
})