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
