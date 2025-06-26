import { refs } from "./refs";


refs.openBtnEl.addEventListener('click', e => {
  refs.burgerMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
});

refs.closeBtnEl.addEventListener('click', e => {
  refs.burgerMenuEl.dataset.visible = 'close';
  document.body.style.overflow = '';
});



refs.mobileMenuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);

    if (!targetEl) return;

    refs.burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';


    setTimeout(() => {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);
  });
});

