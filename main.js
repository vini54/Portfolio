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
const cvLink = './assets/Resume_vinicius.pdf'
cvbtn.setAttribute("href", cvLink)

// scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});
