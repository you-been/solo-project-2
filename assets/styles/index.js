// swiper initialize
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const menuBtn = document.querySelector(".side-menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".side-menu");
const empty = document.querySelector(".empty-wrapper");

menuBtn.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.add("active");
  empty.classList.add("active");
});

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.remove("active");
  empty.classList.remove("active");
});
empty.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.remove("active");
  empty.classList.remove("active");
});

AOS.init();
