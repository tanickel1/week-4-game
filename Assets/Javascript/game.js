var computerTarget = getRandomInt(19, 65);

var crystal1 = getRandomInt(1, 12);

var crystal2 = getRandomInt(1, 12);

var crystal3 = getRandomInt(1, 12);

var crystal4 = getRandomInt(1, 12);

var score = 0;








function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
	$('.crystal').on('click', function(){


		if ($(this).attr('id')=== 'white'){
			score += crystal1;
		}

		else if ($(this).attr('id')=== 'blue'){
			score += crystal2;
		}

		else if ($(this).attr('id')=== 'red'){
			score += crystal3;
		}

		else if ($(this).attr('id')=== 'orange'){
			score += crystal4;
		}

		alert(score);
	});	
});



