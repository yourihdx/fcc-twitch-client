console.log('hello');

// BEGIN filter switcher
$('#buttons-block').find('.twitch-link').on('click', function () {

     if ($(this).hasClass('active')) {
         return;
     }
     
     $('#buttons-block').find('.twitch-link.active').removeClass('active');

     $(this).addClass('active');

     var FILTERFLAG = ($(this).text().trim());
     console.log(FILTERFLAG.length);

     if(FILTERFLAG == "ONLINE"){
     	console.log('IT WORKS!');
     	 $('.card-body.offlinex').css({
	     	display: 'none',
	     });
      	$('.card-body.onlinex').css({
	     	display: 'block',
	     });
     } else if (FILTERFLAG == 'OFFLINE') {
     	$('.card-body.onlinex').css({
	     	display: 'none',
	     });
     	$('.card-body.offlinex').css({
	     	display: 'block',
	     });
     }else {
     	$('.card-body.offlinex').css({
	     	display: 'block',
	     });
     	$('.card-body.onlinex').css({
	     	display: 'block',
	     });
     }

});
// END filter switcher

// BEGIN get_streamer_data function
function get_streamer_data(nickname='ESL_SC2'){
	$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + nickname +'?callback=?', function(data) {
		
	  	if (data.stream != null) {
		  	var game = data.stream.game;
		  	var status = data.stream.channel.status;
	  	}
		  else {
		  	// console.log(nickname, 'offline'); 
		  	var game = '';
		  	var status = 'offline';
		  	console.log(data);
		  }

		var link = "<a href=\"https://www.twitch.tv/" + nickname + "\">" + nickname + "</a>";

		// $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + nickname, function(data) {
		// 	// console.log(data.logo);
		// 	logo_url = data.logo.toString();
		// });
		// console.log(logo_url);

		var h5 = $('<h5>', {
			class: "card-title",
			html: link
		});

		var span = $('<span>', {
			class: "card-text text-center",
			html: status,
		});

		var div_cardborder = $('<div>', {
			class: "card border-light  text-center"
		});

		if (status == 'offline') {
			var id = status + 'x';
		} else {
			var id = 'onlinex';
		}
		
		var div_cardbody = $('<div>', {
			class: "card-body " + id,

		});

		var card_image = $('<img>', {
			class: "rounded float-left",
			alt: "Card image cap",
			src: "http://lorempixel.com/80/80/technics"
		});

		var gamer_card = div_cardborder.append(div_cardbody.append(card_image).append(h5).append(span));

		$(gamer_card).appendTo('#main');

		});
	}
// END get_streamer_data function

var gamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "noobs2ninjas"];
for (var i = gamers.length - 1; i >= 0; i--) {
	get_streamer_data(gamers[i]);
}

// http://placeimg.com/80/80/tech/sepia

