$(function() {

	// declare and initialize 
	var computerChoice, 
		playerChoice,
		remainingGuesses = 4;

	// listen for a click event 
	$('#guess-btn').click(function(guess) {
		// prevent a form submission using this function
		event.preventDefault();
	});

	// selects an element with an id of guess-btn
	// listen for a click event when user clicks on the guess button
	$('#guess-btn').click(generateRandomNum);
	$('#guess-btn').click(numOfGuesses);
	$('#guess-btn').click(numOfGuessesRemaining); 

	// resets the game when player clicks the reset game button
	$('#reset').click(resetGame);

	computerChoice = generateRandomNum();
	
	// function to generate random number 
	function generateRandomNum() {
		// returns a random number between 1 (inclusive) and 100 (inclusive)
		return Math.floor((Math.random() * 100) + 1); 
	}

	// function to setup messages for player guesses
	function numOfGuesses() {
		playerChoice = parseInt($('#guess').val());

		if (playerChoice < computerChoice) {
			$('.message').text('Your guess was too low');

		} else if (playerChoice > computerChoice) {
			$('.message').text('Your guess was too high');
		
		} else if (playerChoice === computerChoice) {
			$('.message').text('You guessed correctly!');
			// prints computer's choice to console when player guesses correctly 
			console.log('Computer chose the number: ' + computerChoice);
			$('.message').attr('class', "success");
		} 
	}

	// calculate number of guesses left
	// decrement number of guesses 
	function numOfGuessesRemaining() {
		if (remainingGuesses > 0) {
			$('#numberOfGuessesRemaining').text(remainingGuesses--);
			console.log('Player guessed the number: ' + playerChoice);
			
		} else if (remainingGuesses === 0) {
			$('#numberOfGuessesRemaining').text(0);
			$('.message').text('Game over...you ran out of guesses');
			// prints computer's choice to console at end of round when player runs out of guesses
			console.log('Computer chose the number: ' + computerChoice);
			$('.message').attr('class', 'error');
		}
	}

	// setup reset button
	// number of guesses resets to 5
	function resetGame() {
		// the location object holds info about the current url
		// reload() method reloads the current document
		location.reload(); //reload the current document
	}

});