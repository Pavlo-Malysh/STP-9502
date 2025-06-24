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
  slidesPerView: 1,
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
      console.log('✅ Swiper ініціалізований');
      setTimeout(() => {
        updateBulletClasses(this);
      }, 0);
    },
    slideChange() {
      console.log('➡️ Слайд змінено');
      // Нічого не робимо тут
    },
    transitionEnd() {
      console.log('🎯 transitionEnd');
      updateBulletClasses(this);
    }
  }
});

// Функція оновлення буллетів за відстанню до активного
function updateBulletClasses(swiper) {
  const bullets = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
  const realIndex = swiper.realIndex;

  console.log('🔁 slideChange | realIndex:', realIndex);
  console.log('📌 bullets:', bullets.length);

  bullets.forEach((bullet, index) => {
      bullet.classList.remove('swiper-pagination-bullet-active');
    // Прибираємо всі старі класи bullet-distance
    for (let i = 0; i <= 5; i++) {
      bullet.classList.remove(`bullet-distance-${i}`);
    }

    const distance = Math.abs(index - realIndex);
    const clamped = Math.min(distance, 5); // максимум до 5
    bullet.classList.add(`bullet-distance-${clamped}`);

    console.log(`🔸 Bullet ${index}: distance = ${distance}, class = bullet-distance-${clamped}`);
  });
}

