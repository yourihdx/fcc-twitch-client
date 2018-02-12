console.log('hello');

$('#buttons-block').find('.twitch-link').on('click', function () {

     if ($(this).hasClass('active')) {
         return;
     }
     
     $('#buttons-block').find('.twitch-link.active').removeClass('active');

     $(this).addClass('active');
});

// https://wind-bow.glitch.me/twitch-api 

$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
  // $('.card-text').text(data);
  console.log('ESL_SC2:', data.stream);
});

$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/RobotCaleb?callback=?', function(data) {
  // $('.card-text').text(data);
  console.log('RobotCaleb: ', data.stream);
});

// http://placeimg.com/80/80/tech/sepia

var gamer_card = "<a href=\"#\">";
gamer_card += "<div class=\"card border-light text-center\">";		
gamer_card += "<div class=\"card-body\">";
gamer_card += "<img class=\"rounded float-left\" src=\"http://placeimg.com/80/80/tech/sepia\" alt=\"Card image cap\">";
gamer_card += "<h5 class=\"card-title\">{1}</h5>";
gamer_card += "<p class=\"card-text\">Supporting text for a streamer's content.</p>";
gamer_card += "</div></div></a>";

 		

$("#main").html(gamer_card);

