// Burger menu -- Start --

const initBurgerMenu = () => {
  const iconMenu = document.querySelector('[data-menu-icon]');
  if (iconMenu) {
    const menuBody = document.querySelector('[data-menu-body]');
    iconMenu.addEventListener('click', () => {
      iconMenu.classList.toggle('is-active');
      menuBody.classList.toggle('is-active');
      document.body.classList.toggle('scroll-lock');
    });
  }
};
export {initBurgerMenu};
// Burger menu -- End --

