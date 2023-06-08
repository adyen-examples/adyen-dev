/*===== MENU TOGGLE =====*/
const navList = document.querySelector('.nav');
const toggleMenu = document.querySelector('.hamburger');

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('open-menu');
    toggleMenu.classList.toggle('open-menu');
});