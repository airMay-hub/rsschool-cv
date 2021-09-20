// Переменные

const menuBurger = document.querySelector('.navigation__burger');
const navigation = document.querySelector('.navigation__body');
const navigationItems = document.querySelectorAll('.navigation__link');
const buttonTop = document.querySelector('.button-top');
const chooseColor = document.querySelector('.choose-color__input');
const introduction = document.querySelector('.introduction');
const header = document.querySelector('.header');
const body = document.querySelector('body');

// Меню бургер

if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    menuBurger.classList.toggle('navigation__burger_active');
    navigation.classList.toggle('navigation__body_active');
  });
}

function removeActive(e) {
  navigationItems.forEach(item => {
    if(e.target === item && 
      navigation.classList.contains('navigation__body_active')) {
        document.body.classList.remove('lock');
        menuBurger.classList.remove('navigation__burger_active');
        navigation.classList.remove('navigation__body_active');
    }
  })
}

navigation.addEventListener('click', removeActive);

window.onclick = function(event) {
  if (!(event.target.matches(".navigation__body") || 
  event.target.matches(".navigation__burger") || 
  event.target.matches(".choose-color__input"))) {
      document.body.classList.remove('lock');
      menuBurger.classList.remove('navigation__burger_active');
      navigation.classList.remove('navigation__body_active');
  }
}

// Кнопка наверх

function toggleButtonTop () {
  if (document.body.scrollTop > 200 || 
    document.documentElement.scrollTop > 200) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

window.addEventListener('scroll', toggleButtonTop);

buttonTop.addEventListener('click', () => {
    window.scroll(top);
});

// Выбор цвета

chooseColor.addEventListener('input', (e) => {
  let color = e.target.value;
  introduction.style.background = `linear-gradient(-45deg, #000000, #181727, ${color})`;
  body.style.background = `linear-gradient(90deg, #000000, #181727, ${color})`;
  if (window.innerWidth < 768) {
  header.style.background = `linear-gradient(-45deg, #181727, ${color})`;
}
});