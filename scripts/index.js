const nestedMenuItems = Array.from(document.querySelectorAll('.menu__link_has-subsection'));
const mobileMenuButton = document.querySelector('.header__menu-button');
const headerMenuElement = document.querySelector('.header__menu');
const headerOverlayElement = document.querySelector('.header__overlay');

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

const toggleMobileMenu = () => {
  headerMenuElement.classList.toggle('menu_visible_true');
  headerOverlayElement.classList.toggle('header__overlay_visible_true');
}

nestedMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover',showSubmenu);
})

mobileMenuButton.addEventListener('click', toggleMobileMenu);

headerOverlayElement.addEventListener('click', toggleMobileMenu);
