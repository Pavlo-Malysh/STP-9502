import { refs } from "./refs";


refs.openBtnEl.addEventListener('click', e => {
  refs.burgerMenuEl.dataset.visible = 'open';
});

refs.closeBtnEl.addEventListener('click', e => {
  refs.burgerMenuEl.dataset.visible = 'close';
});



refs.mobileMenuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Щоб вручну контролювати скрол

    const targetId = link.getAttribute('href').slice(1); // Без "#"
    const targetEl = document.getElementById(targetId);

    if (!targetEl) return;

    // Закрити мобільне меню
    refs.burgerMenuEl.dataset.visible = 'close';

    // Трохи затримати скрол, поки меню зникає (анімація)
    setTimeout(() => {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // 300мс = час transition для opacity/visibility
  });
});

