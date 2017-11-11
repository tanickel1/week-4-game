var computerTarget = getRandomInt(19, 65);

var crystal1 = getRandomInt(1, 12);

var crystal2 = getRandomInt(1, 12);

var crystal3 = getRandomInt(1, 12);

var crystal4 = getRandomInt(1, 12);

var score = 0;

var wins = 0;

var losses = 0; 





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
	$('.crystal').on('click', function(){


		if ($(this).attr('id')=== 'white'){
			score += crystal1;
			$('.score1').html(score);
		};

		if ($(this).attr('id')=== 'blue'){
			score += crystal2;
			$('.score1').html(score);
		};

		if ($(this).attr('id')=== 'red'){
			score += crystal3;
			$('.score1').html(score);
		};

		if ($(this).attr('id')=== 'orange'){
			score += crystal4;
			$('.score1').html(score);
		};
	});	

	$('.numtomatch').html(computerTarget);

//hey guys, very much getting confused with the section below here. 
//been working on it for a few hours and didnt realize it was almost midnight. 
//thanks


	$('.victory').html(wins);

	$('.failure').html(losses);

	//if (computerTarget > score){
	//	losses+=;
	//	console.log(losses)
	//	};
});

