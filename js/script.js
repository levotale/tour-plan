$(document).ready(function () {
  $(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpeg" });

  var hotelSlider = new Swiper(".hotel-slider", {
    // Swiper effect
    effect: "coverflow",
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
      nextEl: ".hotel-slider__button_next",
      prevEl: ".hotel-slider__button_prev",
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
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
      nextEl: ".reviews-slider__button_next",
      prevEl: ".reviews-slider__button_prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom_visible");
  });
});
