// Script for smooth scrolling only because of MacOS and ios - Start -
import {scrollTo} from '../utils/scroll-to';
const initScrollToAnchor = () => {
  const anchorLinks = document.querySelectorAll('.main-heading__nav-list-link[data-scroll-to]');
  if (anchorLinks.length) {
    anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const currentBlock = link.getAttribute('data-scroll-to');
        const blockTop = document.querySelector(`[data-id=${currentBlock}]`).offsetTop;
        e.preventDefault();
        scrollTo(blockTop, 400);
      });
    });
  }
};
export {initScrollToAnchor};
// Script for smooth scrolling only because of MacOS and ios - End -
