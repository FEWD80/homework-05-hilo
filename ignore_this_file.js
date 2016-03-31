$(function() {

	// declare and initialize variables to keep track of user input
	var computerChoice = generateRandomNum(1, 100); //store computer random number choice
	var numOfGuesses = document.getElementById('numberOfGuessesRemaining').textContent = 5; //total number of guesses given is 5
	var message = document.getElementsByClassName('message').textContent;

	// Generate random value between two numbers, 1 (included) and 100 (included):
	// 1 is our start number
	// 100 is the number of possible results
	var generateRandomNum = Math.floor((Math.random() * 100) + 1); //return a random number between 1 and 100
	var numOfGuesses = 5;

	var playerChoice = 

	$('#submit-btn').submit(game(playerChoice, numOfGuesses));

	function game(playerchoice, totalgsLeft) {

		while (numOfGuesses > 0 ) { 

			//compare playersnum w/ computers num
			//too low
			if (playerChoice < computerChoice) {
				//log too low
				//alert(playerChoice + " is" + " too low");
				var playerChoice = $('#guess').val();
				$('#submit-btn').submit(game(playerChoice, totalgsLeft-1));


			//too high
			} else if (playerChoice > computerChoice) {
				//log too high
				//alert(playerChoice + " is" + " too high");
				var playerChoice = $('#guess').val();
				game(playerchoice, totalgsLeft-1)
			//player correct
			} else {
				break; //break while loop so it stops playing
				//change message
			}

			numOfGuesses--; //decrement guesses every round
		}
	}








	




});