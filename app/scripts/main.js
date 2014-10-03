// $('.a').click(function(){
//
//   $('.c').removeClass('b');
//
//   $(this).next().addClass('b');
//
//   if( $('.a').hasClass('b')){
//     $('.a').click(function(){
//
//       $('.c').removeClass('b');
//     });
//   }
//
// });

$('.a').click(function(){

  if($(this).next().hasClass('b')){
    $('.c').removeClass('b');
  }

  else{
    $('.c').removeClass('b');
    $(this).next().addClass('b');

  }
// $('.a').click(function(){
//
//   $('.c').removeClass('b');
// //event.preventDefault();
//
});
