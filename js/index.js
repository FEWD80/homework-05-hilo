$(document).ready(function() {
	//First we'll need our variables
	var answer; //This will be the randomly generated number
	//answer = Math.floor((Math.random() * 100) +1); 
	//answer = 5;
	var guess; //This will be the user's current guess
	var count = 5; //This is the number of guesses remaining
	//$('#reset').click(resetFunc);

	$('button').click(function(event) {
		event.preventDefault();
            var button_type = ($(this).attr("value"));
            //answer = Math.floor((Math.random() * 100) +1); 
            //alert("Here is the number " + answer);
            if (button_type === 'guess') {
            	guess = parseInt($('#guess').val());
            	main();
            } else {
            	resetFunc();
            }
        });

	function resetFunc() {
		answer = Math.floor((Math.random() * 100) +1); 
		count = 5;
		$('#numberOfGuessesRemaining').val("count");
	}

	function main() {
		if (count === 0) {
			$('.message').text("Sorry you are out of tries. Hit the reset button to try again");
			$('message').attr('class', 'error');
		}
		
		if (guess === answer) {
			//Then we'll want to go to our success class
			$('.message').text("Your number is correct!!!!");
			// $('.message').css('background', '#98fb98');
			// $('.message').css('padding', '15px');
			// $('.message').css('border', '2px solid green');
			$('message').attr('class', 'success');
			//$('.message').attr('class', 'css/.success');
			resetFunc();
		} else if (guess < answer) {
			//Here we handle the case of the guess being below the target answer
			$('.message').text("Your number is too low");
		} else {
			//Here we handle the case of the guess being greater than the target answer
			$('.message').text("Your number is too high");
		}
		count--;
		$('#numberOfGuessesRemaining').text(count);
		
	}

	// function success() {
	// 	$('.message').attr( 'background', '#98fb98');

	// }

});