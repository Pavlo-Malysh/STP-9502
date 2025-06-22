// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 2,
  spaceBetween: 17,
  speed: 500,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
    dynamicBullets: false
  },

  on: {
    init() {
      updateBulletClasses(this);
    },
    slideChange() {
      updateBulletClasses(this);
    }
  }
});

// Функція оновлення буллетів за відстанню до активного
function updateBulletClasses(swiper) {
  const bullets = swiper.pagination.bullets;
  const realIndex = swiper.realIndex;

  bullets.forEach((bullet, index) => {
    // Очистити старі класи
    for (let i = 0; i <= bullets.length; i++) {
      bullet.classList.remove(`bullet-distance-${i}`);
    }

    const distance = Math.abs(index - realIndex);
    const clamped = Math.min(distance, 5); // обмежити до 5
    bullet.classList.add(`bullet-distance-${clamped}`);
  });
}
