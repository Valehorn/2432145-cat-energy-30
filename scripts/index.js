var s=document.querySelector(".header__wrapper"),t=document.querySelector(".nav"),e=document.querySelector(".nav__toggle"),r=document.querySelector(".nav__wrapper"),a=document.querySelector(".address");s.classList.remove("header__wrapper--nojs");t.classList.remove("nav--nojs");a.classList.remove("address--nojs");function o(n){n.key==="Escape"&&(n.preventDefault(),r.classList.remove("nav__wrapper--phone-menu-open"),e.classList.remove("nav__toggle--close-burger"),e.classList.add("nav__toggle--open-burger"),l())}function c(){e.classList.toggle("nav__toggle--open-burger"),e.classList.toggle("nav__toggle--close-burger"),r.classList.toggle("nav__wrapper--phone-menu-open"),document.addEventListener("keydown",o)}e.addEventListener("click",()=>{c()});function l(){document.removeEventListener("keydown",o)}
