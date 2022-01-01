var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 80,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".clients__button-next",
    prevEl: ".clients__button-prev",
  },
});

