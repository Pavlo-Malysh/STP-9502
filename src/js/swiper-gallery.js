
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('#idGallery .swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 17,
  speed: 500,

  navigation: {
    nextEl: '#idGallery .swiper-button-next',
    prevEl: '#idGallery .swiper-button-prev',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    }
  },

  pagination: {
    el: '#idGallery .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
    dynamicBullets: false
  },

  on: {
    init() {
      setTimeout(() => {
        updateBulletClasses(this);
      }, 0);
    },
    slideChange() { },
    transitionEnd() {
      updateBulletClasses(this);
    }
  }
});

// Функція оновлення буллетів за відстанню до активного
function updateBulletClasses(swiper) {
  const bullets = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
  const realIndex = swiper.realIndex;

  bullets.forEach((bullet, index) => {
    bullet.classList.remove('swiper-pagination-bullet-active');
    // Прибираємо всі старі класи bullet-distance
    for (let i = 0; i <= 5; i++) {
      bullet.classList.remove(`bullet-distance-${i}`);
    }

    const distance = Math.abs(index - realIndex);
    const clamped = Math.min(distance, 5); // максимум до 5
    bullet.classList.add(`bullet-distance-${clamped}`);

  });
}