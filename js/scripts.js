"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
  const menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", (event) => {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

// goto
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.target;
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header").offsetHeight;

          if(menuIcon.classList.contains("_active")) {
            document.body.classList.remove("_lock")
            menuIcon.classList.remove("_active");
            menuBody.classList.remove("_active");
          }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
      }
    });
  });
}


const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if(menuIcon) {
  menuIcon.addEventListener("click", event => {
    document.body.classList.toggle("_lock")
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  })
}