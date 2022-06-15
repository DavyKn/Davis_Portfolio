import myObjects from "./data";

const menuMobile = document.getElementById('menu_mobile');
const hamburgerMenu = document.getElementById('hamburger_menu');
const closeButton = document.getElementById('close_button');
const navElement = document.querySelectorAll('.menu_mobile a');

hamburgerMenu.addEventListener('click', () => {
  menuMobile.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});

navElement.forEach((element) => {
  element.addEventListener('click', () => {
    menuMobile.style.display = 'none';
  });
});