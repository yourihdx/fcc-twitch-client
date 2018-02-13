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

     if(FILTERFLAG != "OFFLINE"){
     	console.log('IT WORKS!');
     	 $('.card-body.offline').css({
	     	display: 'none',
	     });
     } else {
     	$('.card-body.offline').css({
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
		  }

		var link = "<a href=\"https://www.twitch.tv/" + nickname + "\">" + nickname + "</a>";

		var h5 = $('<h5>', {
			class: "card-title",
			html: link
		});

		var p = $('<p>', {
			class: "card-text",
			text: status,
		});

		var div_cardborder = $('<div>', {
			class: "card border-light text-center"
		});

		if (status == 'offline') {
			var id = status;
		} else {
			var id ='';
		}
		

		var div_cardbody = $('<div>', {
			class: "card-body " + id,

		});

		var card_image = $('<img>', {
			class: "rounded float-left",
			alt: "Card image cap",
			src: "http://placeimg.com/80/80/tech/sepia"
		});

		var gamer_card = div_cardborder.append(div_cardbody.append(card_image).append(h5).append(p));

		$(gamer_card).appendTo('#main');

		});
	}
// END get_streamer_data function

var gamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "noobs2ninjas"];
for (var i = gamers.length - 1; i >= 0; i--) {
	get_streamer_data(gamers[i]);
}

// http://placeimg.com/80/80/tech/sepia

