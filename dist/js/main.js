var button = document.querySelector('#button');
var model  = document.querySelector('#modal');
var close  = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(closeModalDialog, 5000)
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});


function closeModalDialog() { 
  modal.classList.remove('modal_active');
};
