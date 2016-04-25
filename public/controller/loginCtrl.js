angular.module('giphyApp').controller('loginCtrl', function($scope) {

  $("#login-button").click(function(event){
    event.preventDefault();

  $('form').fadeOut(500);
  $('.wrapper').addClass('form-success');
  });

  $('.signup').hide();
  $('.newUser').click(function() {
    $('.login').slideUp('slow');
    $('.signup').slideDown('slow');
  });
  $('.logInReturn').click(function() {
    $('.signup').slideUp('slow');
    $('.login').slideDown('slow');
  });


})
