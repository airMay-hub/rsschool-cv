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

document.addEventListener("DOMContentLoaded", () => {
  buttonTop.style.display = "none";
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

console.log(`Всего 150 баллов \n Невыполнено: \n 1. Отсутствует видеорезюме: (0); \n Выполнено: \n 2. Вёрстка валидная. Проверено https://validator.w3.org/: (10); \n 3. Вёрстка семантическая. 6 семтических тегов HTML5 и 5 уникльных заголовков: (20); \n 4. Для оформления СV используются css-стили: (10); \n 5. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы: (10); \n 6. Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется: (10); \n 7. Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным: (10); \n 8. Присутствует аватарка, пропорции не искажены, есть атрибут alt (может быть пустым): (10); \n 9. Контакты для связи и перечень навыков оформлены в виде списка ul > li: (10); \n 10. CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского: (10); \n 11. CV содержит решение задачи с сайта codewars с подсветкой кода: (10); \n 12. CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий: (10); \n 13. CV выполнено на английском языке: (10); 14. Выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка: (10); \n 15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию: (10).`);