$(document).ready(function () {
  $("#slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ["<img src=\"img/slider/left-arrow.png\">", "<img src=\"img/slider/right-arrow.png\">"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 3,
        margin: 29,
      },
    },
  });
});