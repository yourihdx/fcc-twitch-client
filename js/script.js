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
     	 $('.card.offlinex').css({
	     	display: 'none',
	     });
      	$('.card.onlinex').css({
	     	display: '',
	     });
     } else if (FILTERFLAG == 'OFFLINE') {
     	$('.card.onlinex').css({
	     	display: 'none',
	     });
     	$('.card.offlinex').css({
	     	display: '',
	     });
     }else {
     	$('.card.offlinex').css({
	     	display: '',
	     });
     	$('.card.onlinex').css({
	     	display: '',
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
		  	// console.log(data);
		  }

		var link = "<a href=\"https://www.twitch.tv/" + nickname + "\">" + nickname + "</a>";

		console.log(window.LOGOURL);

		var h5 = $('<h3>', {
			class: "card-title text-center",
			html: link
		});

		var span = $('<span>', {
			class: "card-text text-center",
			html: status,
		});

		if (status == 'offline') {
			var id = status + 'x';
		} else {
			var id = 'onlinex';
		}

		var div_cardborder = $('<div>', {
			class: "card border-dark text-center " + id
		});


		
		var div_cardbody = $('<div>', {
			class: "card-body ",

		});

		var gamer_card = div_cardborder.append(div_cardbody.append(h5).append(span));

		$.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + nickname, function(data) {
		
			var logo_url = data.logo.toString();
			
			var card_image = $('<img>', {
				class: "rounded float-left",
				alt: "Card image cap",
				src: logo_url
				});

			h5.append(card_image);

			});
		$(gamer_card).appendTo('#main');

		});
	}
// END get_streamer_data function

var gamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "noobs2ninjas"];
for (var i = gamers.length - 1; i >= 0; i--) {
	get_streamer_data(gamers[i]);
}

