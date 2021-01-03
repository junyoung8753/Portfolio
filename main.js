`use strict`;


// Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  const scrollYHeight = window.scrollY;
  if (navbarHeight < scrollYHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
