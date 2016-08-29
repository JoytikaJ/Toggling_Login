// some sort of event listener for click --- jquery
$( document ).ready(function() {
// Toggle Function
var x;
$('.toggle').click(function(){
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  $(this).children('change-screen').toggleClass('sign');
  //remove the "forgot password" when switching to register page
  //  per jquery docs, to add "forgot your password create a var, appendTo and detach with if/else statement
    if (x) {
      x.appendTo(".form-container");
      x = null
    } else {
      x = $(".forgot_pass").detach();
    };

  $('.form').animate({
    height: "toggle",
  'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});

});