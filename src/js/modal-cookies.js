import { refs } from "./refs";

refs.modalCookiesBtnAccept.addEventListener('click', acceptCookies);
refs.modalCookiesBtnDecline.addEventListener('click', declineCookies);

const userValue = localStorage.getItem('cookies');

if (userValue === 'accepted') {
  refs.modalCookiesElem.dataset.visibleCookies = 'close';
}

function acceptCookies(e) {
  const userChoice = e.target.value
  localStorage.setItem('cookies', userChoice)

  refs.modalCookiesElem.dataset.visibleCookies = 'close';
}

function declineCookies(e) {
  refs.modalCookiesElem.dataset.visibleCookies = 'close';

  const userChoice = e.target.value
  localStorage.setItem('cookies', userChoice)
}
