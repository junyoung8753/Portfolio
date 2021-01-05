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
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

//Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  const opacityPercent = 1 - scrollHeight / homeHeight;
  home.style.opacity = opacityPercent;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the "arrow up" button

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});
//---------------------------------------------------
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
//----------------------------------------------------

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projectContainer.classList.add('anim-out');
 

setTimeout(() => {
  projects.forEach((project) => {
    const type = project.dataset.type;
    if (type === filter || filter === '*') {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
  projectContainer.classList.remove('anim-out');
}, 300);
});


//--------------------------------------------------------------------------
/* const categoryBtn = document.querySelector('.category__btn');
workBtnContainer.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  init(link);
});

function init(event) {
  const project = document.querySelectorAll(`.project${event}`);
  console.log(project);
  const ddd = document.getElementsByClassName(event);
  console.log(ddd);
  // if(project == )
} */
