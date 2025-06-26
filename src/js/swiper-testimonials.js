import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperReviews = new Swiper('#idReviews [data-swiper]', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 17,
  speed: 500,

  navigation: {
    nextEl: '#idReviews [data-btn-swiper-next]',
    prevEl: '#idReviews [data-btn-swiper-prev]',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    }
  },

  pagination: {
    el: '#idReviews [data-pagination]',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
    dynamicBullets: false
  },

  on: {
    init() {
      setTimeout(() => {
        updateBulletClassesReviews(this);
      }, 0);
    },
    transitionEnd() {
      updateBulletClassesReviews(this);
    }
  }
});


function updateBulletClassesReviews(swiper) {
  const paginationEl = swiper.pagination?.el;
  if (!paginationEl) return;

  const bullets = paginationEl.querySelectorAll(' [data-pagination] .swiper-pagination-bullet');
  if (!bullets || bullets.length === 0) return;

  const bulletCount = bullets.length;
  const activeIndex = swiper.realIndex % bulletCount;

  bullets.forEach((bullet, index) => {
    for (let i = 0; i <= 6; i++) {
      bullet.classList.remove(`bullet-distance-${i}`);
    }

    const distance = Math.abs(index - activeIndex);
    const clamped = Math.min(distance, 5);
    bullet.classList.add(`bullet-distance-${clamped}`);
  });
}