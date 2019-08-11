$(document).ready(function () {
  var close           =   $('#close2');
  var form            =   $('.form');
  var success_message =   $('.none');
  var time_animation  =   500;
  var time_return     =   3000;
  $('#offer-form').on('submit', function(event) { 
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function (data) {
        form.hide(time_animation);
          $('form :input').val('');
        success_message.show(time_animation);
          setTimeout(function () {
            form.show(time_animation);
            success_message.hide(time_animation);
          }, time_return);
      }
      });
  });
});



