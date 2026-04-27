const swiper = new Swiper(".formats__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".formats__arrow-next",
    prevEl: ".formats__arrow-prev",
  },
});
