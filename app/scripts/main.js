
$('.a').click(function(){

  $('.c').removeClass('b');

  $(this).next().addClass('b');

});
