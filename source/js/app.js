import ScrollReveal from "scrollreveal";

window.addEventListener("scroll", () => {
  scrollHeader();
  scrollActive();
  scrollUpShow();
});

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
});

//@note menu
function showMenu() {
  const navMenu = document.querySelector("#nav-menu");
  const navToggle = document.querySelector("#nav-toggle");
  const navClose = document.querySelector("#nav-close");
  const navLink = document.querySelectorAll(".nav__link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    }),
  );
}

//@note scroll background header
function scrollHeader() {
  const header = document.querySelector("#header");

  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
}

//@note scroll sections active link
function scrollActive() {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`,
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
}

//@note show scroll up
function scrollUpShow() {
  const scrollUp = document.querySelector("#scroll-up");

  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

//@note scroll reveal animation
const sr = ScrollReveal( {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__data, .footer__content, .footer__logo, .footer__description`)
sr.reveal(`.home__tree-1`, {origin: 'left', delay: 800})
sr.reveal(`.home__tree-2`, {origin: 'right', delay: 800})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`category__card, .items__card`, {interval: 100})
sr.reveal(`.about__img, .about__data, .footer__tree-2`, {origin: 'left'})
sr.reveal(`.party__images, .party__data, .footer__tree-1`, {origin: 'right'})
