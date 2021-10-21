// Header shadow scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
   if(window.scrollY >= navHeight){
      header.classList.add('scroll')
   }else{
      header.classList.remove('scroll')
   }
})
// Menu hambuguer
const menuBtn = document.querySelector('#menu')
const navLinks = document.querySelector('#nav-links')
menuBtn.addEventListener('click', menuToggle)

function menuToggle(){
   menuBtn.classList.toggle('active')
   menuBtn.classList.toggle('bx-x')
   navLinks.classList.toggle('active')
   header.classList.toggle('active')
}

// CV
const cvbtn = document.querySelector('.cv')
const cvLink = './assets/Vinícius-Santos-de-Oliveira.pdf'
cvbtn.setAttribute("href", cvLink)