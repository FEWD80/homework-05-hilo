$(function(){

	var magicNumber = Math.floor((Math.random()*100)+1);
	var guesses = 5;

	$('#guessForm').submit(getGuess);
	$('#reset').click(reset);

	function reset() {
		guesses = 5;
		magicNumber = Math.floor((Math.random()*100)+1);
		$('#numberOfGuessesRemaining').text(guesses);
		$('.message').hide();
	}
	
	function getGuess(event) {		
		event.preventDefault();
		$('.message').show();
		var userGuess = parseInt($('#guess').val());
		calculateGuess(userGuess);					
	}

	function calculateGuess(userGuess) {		
		if (userGuess === magicNumber && guesses > 0) {
			$('.message').addClass('success').removeClass('error');
			$('.message').text('Correct!');
			guesses = 5;
			$('#numberOfGuessesRemaining').text(guesses);
		}
		else if (userGuess < magicNumber && guesses > 0) {
			$('.message').removeClass('success error');
			$('.message').text('Too Low');
			guesses--;
			$('#numberOfGuessesRemaining').text(guesses);
		}
		else if (userGuess > magicNumber && guesses > 0) {
			$('.message').removeClass('success error');
			$('.message').text('Too High');
			guesses--;
			$('#numberOfGuessesRemaining').text(guesses);
		}
		else if (isNaN(userGuess) === true) {
			alert("Enter valid number");
		}
		else {
			$('.message').addClass('error').removeClass('success');
			$('.message').text('Out of guesses. Game over.');
		}
	}	

});