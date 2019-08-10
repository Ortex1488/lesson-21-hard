
  $(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() >= 2100){
        $(".price__card").css("animation-name", "cardTwo"),
        $(".price__card").css("animation-duration", "1s")
      }
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1700) {
        $(".price_itt").css("animation-name", "cardOne"),
          $(".price_itt").css("animation-duration", "1s")
      }
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 500) {
        $(".offer__button").css("animation-name", "cardBtn"),
          $(".offer__button").css("animation-duration", "2s")
      }
    });
  });