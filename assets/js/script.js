const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    NavMenu.classList.toggle('ativo')
})