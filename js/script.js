console.log('hello');

$('#buttons-block').find('.twitch-link').on('click', function () {

     if ($(this).hasClass('active')) {
         return;
     }

     $('#buttons-block').find('.twitch-link.active').removeClass('active');

     $(this).addClass('active');
});