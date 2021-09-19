// Меню бургер

const menuBurger = document.querySelector('.navigation__burger');
const navigation = document.querySelector('.navigation__body');
const navigationItems = document.querySelectorAll('.navigation__link');

if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    menuBurger.classList.toggle('navigation__burger_active');
    navigation.classList.toggle('navigation__body_active');
  });
}

function removeActive(e) {
  navigationItems.forEach(item => {
    if(e.target === item && navigation.classList.contains('navigation__body_active')) {
      document.body.classList.remove('lock');
        menuBurger.classList.remove('navigation__burger_active');
        navigation.classList.remove('navigation__body_active');
    }
  })
}

navigation.addEventListener('click', removeActive);