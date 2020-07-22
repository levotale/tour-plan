var hotelSlider = new Swiper(".swiper-container", {
  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button_next",
    prevEl: ".slider-button_prev",
  },
});
