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


//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;
  const selectLink = document.querySelector(link);
  console.dir(target)
  console.log(target.dataset)
  if (link == null) {
    return;
  } else{
    selectLink.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
});
