// slider in posted works section -- Start --
/* eslint-disable no-undef */
const initPostedWorksSlider = () => {
  const PostedWorksSlider = document.querySelector('.posted-works__slider');
  if (PostedWorksSlider) {
    // eslint-disable-next-line no-unused-vars
    const swiper01 = new Swiper(PostedWorksSlider, {
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      watchOverflow: true,
      // Default parameters
		slidesPerView: 1,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        // when window width is >= 480px
        640: {
			 slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
			slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
			slidesPerView: 3,
          spaceBetween: 50,
        },
        1366: {
			slidesPerView: 3,
          spaceBetween: 76,
        },
      },
    });
  }
};
export {initPostedWorksSlider};
// slider in posted works section --  --
