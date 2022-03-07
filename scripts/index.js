const nestedMenuItems = Array.from(document.querySelectorAll('.menu__link_has-subsection'));

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

const showSubmenu = e => {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.relatedTarget);
}

nestedMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover',showSubmenu);
})
