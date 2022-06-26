const windowInnerWidth = window.innerWidth;
const isMobile = windowInnerWidth < 1024 ? true : false;

const mobileMenuButton = document.querySelector('.header__menu-button'); // Кнопка бургер на мобильной версии
const headerMenuElement = document.querySelector('.header__menu');
const headerOverlayElement = document.querySelector('.header__overlay');
const menuItemsWithSubsections = Array.from(document.querySelectorAll('.menu__item_has-subsection'));

var swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".clients__button-next",
    prevEl: ".clients__button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    810: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
});

if(isMobile) {
  const hideSubMenu = (subMenu) => {
    //subMenu.classList.remove('menu__sublist_visible');
    //console.log('click');
  }

  const showSubmenu = e => {
    e.preventDefault();
    e.stopPropagation();

    if(e.target) {

    }

    console.log(e.target);
    console.log(e.currentTarget);

    const subMenu = e.currentTarget.querySelector('.menu__sublist');
    const backLinkEl = subMenu.querySelector('.menu__sublist-back');
    backLinkEl.addEventListener('click', hideSubMenu(subMenu));
    //console.log(backLinkEl);
    subMenu.classList.add('menu_visible');

  }

  const toggleMobileMenu = () => {
    headerMenuElement.classList.toggle('menu_visible');
    headerOverlayElement.classList.toggle('header__overlay_visible_true');
  }

  menuItemsWithSubsections.forEach((item) => {
    item.addEventListener('click',showSubmenu);
  })

  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  headerOverlayElement.addEventListener('click', toggleMobileMenu);
}

