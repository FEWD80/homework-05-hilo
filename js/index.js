//At the start of each game the app should randomly generate the secret number (it should be a whole number)
$(function() {

	var randomNum = getRandom();
	var guessNum;
	var turns = 5;
/*	var $win = $('.message p').html('Genius! You guessed it right.');
	var $lowNotice = $('.message').html('Sorry, number too low, guess again.');
	var $highNotice = $('.message').html('Sorry, number too high, guess again.');*/
	/*var $reset = $(“#reset”).click(humanGuess);*/

	//When guess button is clicked
	$('#guessbtn').click(humanGuess);
		
	//Do Math.Random between 1-100
	function getRandom() {
  		return Math.floor(Math.random() * (100-1)) + 1;
  	}

	function humanGuess(event) {
		event.preventDefault();

		if (turns === 0) {
			return gameOver();
		}

	    // get information entered into the text field
	    // convert into Integer 
		// store number as guessNum;
	    guessNum = parseInt($('#guess').val());
	    console.log(guessNum);

	    // clear the number entered into the text field
	    $('#newEntry').val("")

		//store math.random as randomNum

		//Compare RandomNum and GuessNum
		//alert respective variable

		if (guessNum < randomNum) {
			turns = turns - 1;
			$('#numberOfGuessesRemaining').text(turns);
			$('.message').text('Sorry, number too low, guess again.');

		} else if (guessNum > randomNum) {

			turns =  turns - 1;
			$('#numberOfGuessesRemaining').text(turns);
			$('.message').text('Sorry, number too high, guess again.');
		} else  {
			$('.message').text('Genius! You guessed it right.');
			gameOver();
		}
	}
		
	

	function gameOver() {
		$('.message').text('Game Over. Hit reset to play again.');
	}

	//on click, turns = 5
	$('#reset').click(reset);
	
	function reset() {
		//generate new number
		//on click turns === 5
	}

});








