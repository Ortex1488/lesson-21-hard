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
  errorClass: "invalid",
  errorElement: "div",
});
$(".phone").mask("8 (999) 999-99-99");
$("#modal-phone").mask("8 (999) 999-99-99");
$("#offer-phone").mask("8 (999) 999-99-99");