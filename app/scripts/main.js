
$('.a').click(function(){

// $(this).next().removeClass('content');

$(this).next().addClass('b');

//$('.c').removeClass('b');
//
// $('.c').addClass('content');
});


$('.a').click(function(){
  $(this).next().removeClass('b');
$(this).next().addClass('content');
});
