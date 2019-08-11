$(document).ready(function () {
  var close = $('#close2');
  var form = $('.form');
  var success_message = $('.none');
  var time_animation = 500;
  var time_return = 3000;
$("#brif-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("Осталось символов - 1"),
        maxlength: "максимальное число символов - 15"
      },
      email: "Укажите корректный email адрес",
      phone: "Укажите номер телефона",
    },
    errorClass: "invalid",
    errorElement: "div",
  });
$("#modal-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  messages: {
    username: {
      required: "Укажите ваше имя",
      minlength: jQuery.validator.format("Осталось символов - 1"),
      maxlength: "Максимальное число символов - 15"
    },
    phone: {
      required: "Укажите номер телефона"
    }
  },
  errorClass: "invalid",
  errorElement: "div",
});
$("#offer-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  messages: {
    username: {
      required: "Укажите ваше имя",
      minlength: jQuery.validator.format("осталось символов - 1"),
      maxlength: "Максимальное число символов - 15"
    },
    phone: "Укажите номер телефона"
  },
  submitHandler: function (form) {
    $('#offer-form').on('submit', function (event) {
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
  },
  errorClass: "invalid",
  errorElement: "div",
});
});
$(".phone").mask("8 (999) 999-99-99");
$("#modal-phone").mask("8 (999) 999-99-99");
$("#offer-phone").mask("8 (999) 999-99-99");