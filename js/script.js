console.log('hello');

$('#buttons-block').find('.twitch-link').on('click', function () {

     if ($(this).hasClass('active')) {
         return;
     }
     
     $('#buttons-block').find('.twitch-link.active').removeClass('active');

     $(this).addClass('active');

     return($(this).text());
});

// https://wind-bow.glitch.me/twitch-api 
function get_streamer_data(nickname='ESL_SC2'){
	$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + nickname +'?callback=?', function(data) {
		var link = 'https://www.twitch.tv/' + nickname;	
	  	if (data.stream != null) {
		  	var game = data.stream.game;
		  	var status = data.stream.channel.status;
	  	
	  }
	  else {
	  	// console.log(nickname, 'offline'); 
	  	var game = '';
	  	var status = 'offline';
	  }

	var h5 = $('<h5>', {
		class: "card-title",
		text: nickname
	});

	var p = $('<p>', {
		class: "card-text",
		text: (game + " : " + status)
	});

	var div_cardborder = $('<div>', {
		class: "card border-light text-center"
	});

	var div_cardbody = $('<div>', {
		class: "card-body"
	});

	var card_image = $('<img>', {
		class: "rounded float-left",
		src: "http://placeimg.com/80/80/tech/sepia"
	});


	var gamer_card = div_cardborder.append(div_cardbody).append(card_image).append(h5).append(p);

  // 	  	var gamer_card = "<a href=\"" + link + "\">";
		// gamer_card += "<div class=\"card border-light text-center\">";		
		// gamer_card += "<div class=\"card-body\">";
		// gamer_card += "<img class=\"rounded float-left\" src=\"http://placeimg.com/80/80/tech/sepia\" alt=\"Card image cap\">";
		// gamer_card += "<h5 class=\"card-title\">" + nickname + "</h5>";
		// gamer_card += "<p class=\"card-text\">" + game + " : " + status + "</p>";
		// gamer_card += "</div></div></a>";

		$(gamer_card).appendTo('#main');

	});
	}

var gamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "noobs2ninjas"];
for (var i = gamers.length - 1; i >= 0; i--) {
	get_streamer_data(gamers[i]);
}

// http://placeimg.com/80/80/tech/sepia

