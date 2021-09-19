// Меню бургер

  const menuBurger = document.querySelector('.navigation__burger');
  if (menuBurger) {
    const navigation = document.querySelector('.navigation__body');
    menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      menuBurger.classList.toggle('navigation__burger_active');
      navigation.classList.toggle('navigation__body_active');
    });
  }