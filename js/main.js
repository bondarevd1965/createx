document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true, // Зацикливание слайдов
    autoplay: {
      delay: 5000, // Автопрокрутка каждые 5 секунд
      disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade", // Плавное появление нового слайда
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: function () {
        // Показываем контент на первом активном слайде
        document
          .querySelectorAll(".swiper-slide-active .slide-content")
          .forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
      },
    },
  });
});

const teamItems = document.querySelectorAll('.team_item');
const gradItems = document.querySelectorAll('.team_item_inner .gradient');
const socialItems = document.querySelectorAll('.team_item_inner .social');


teamItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    console.log("You move mouse over item ");

    teamItems.forEach((el) => {
      el.classList.remove('active')
    });
    gradItems.forEach((el) => {
      el.classList.add('hide')
    });

    socialItems.forEach((el) => {
      el.classList.add('hide')
    });

    item.classList.add('active');
    item.querySelector('.team_item_inner .gradient').classList.remove('hide');
    item.querySelector('.team_item_inner .social').classList.remove('hide');
  });
});

const benefitCatItems = document.querySelectorAll('.benefits_item');

benefitCatItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    console.log("You move mouse over item ");

    benefitCatItems.forEach((el) => {
      el.classList.remove('active')
    });

    item.classList.add('active');

  });
});
