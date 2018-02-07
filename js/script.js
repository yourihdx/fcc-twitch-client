console.log('hello');

$('#buttons-block').find('.twitch-link').on('click', function () {

     if ($(this).hasClass('active')) {
         return;
     }
     
     $('#buttons-block').find('.twitch-link.active').removeClass('active');

     $(this).addClass('active');
});

// https://wind-bow.glitch.me/twitch-api 

$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});