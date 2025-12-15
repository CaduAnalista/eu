const btnMenu = document.querySelector('.btn-menu');
const menuMobile = document.querySelector('.menu-mobile');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('ativo');

  const isOpen = menuMobile.classList.contains('ativo');
  btnMenu.setAttribute('aria-expanded', isOpen);
});
