
var button = document.querySelector('#button');
var model  = document.querySelector('#modal');
var close  = document.querySelector('#close');



close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});+
function closeModalDialog() { 
  modal.classList.remove('modal_active');
};
$(document).ready(function () {
  var blanck =  $('.blanck');
  var blanckTop = blanck.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > blanckTop) {
      $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.456048298727!2d37.19910331621273!3d55.6114799805158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b556d92c52e921%3A0x7069f1a444f51ab2!2z0YPQuy4g0JvQtdC90LjQvdCwLCAxMCwg0KLQvtC70YHRgtC-0L_QsNC70YzRhtC10LLQviwg0JzQvtGB0LrQstCwLCAxNDMzNTA!5e0!3m2!1sru!2sru!4v1566126930589!5m2!1sru!2sru" width="99.82%" height="640" frameborder="0" style="border:0" allowfullscreen></iframe>')
      $(window).unbind('scroll')
    }
  });
});

$(document).ready(function(){
  
});