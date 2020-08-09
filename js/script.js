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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom_visible");
    console.log("Working!");
  });

  var modalButton = $("[data-toggle=modal-window]");
  modalButton.on("click", openModal);

  var closeModalButton = $("[data-toggle=close-button]");
  closeModalButton.on("click", closeModal);
  $(document).on("keyup", function (e) {
    if (e.keyCode == 27) {
      closeModalEscKey();
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_active");
    modalDialog.addClass("modal__dialog_active");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_active");
    modalDialog.removeClass("modal__dialog_active");
  }

  function closeModalEscKey(event) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_active");
    modalDialog.removeClass("modal__dialog_active");
  }
});
