$(document).ready(function () {
  var button = $('#button');
  var modal  = $('#modal');
  var close  = $('#close');
  button.on('click', function() {
    modal.addClass('modal_active');
  });
  close.on('click', function() {
    modal.removeClass('modal_active');
  });
});


$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
  });
});

