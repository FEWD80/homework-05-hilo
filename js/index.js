$(function(){

	$("#guessButton").click(compare);

	// declare variables
	var randomInt;
	var userInput;
	var remainingGuesses = 5;

	function compare(event){
		event.preventDefault();

		// generate random integer
		randomInt = Math.ceil(Math.random() * 100);

		// get the userInput and convert it to number
		userInput = parseInt($("#guess").val());

		// display message
		if(userInput === randomInt){
			$(".message").text("Your guess is right");
			$(".message").addClass("Success");

		} else if(userInput < randomInt){
			$(".message").text("Your guess is too low");
			$(".message").addClass("error");

		} else if(userInput > randomInt){
			$(".message").text("Your guess is too high");
			$(".message").addClass("error");

		} else {
			alert("Number not found");
		}

		// the number of guesses remaining count decrement by 1
		// print the remainging guesses

		remainingGuesses = remainingGuesses - 1;
		$("#numberOfGuessesRemaining").text(remainingGuesses);

		// If reaminingGuesses is equal to 0
		// Reset the game
		if (remainingGuesses === 0) {
			alert("Game Over!");
			$("#numberOfGuessesRemaining").text("5");
			$(".message").removeClass("error").text("");
			$("#guess").val("");
			remainingGuesses = 5;
		}

		// If a user's guess is right, reset the game 
		if(userInput === randomInt) {
			$("#numberOfGuessesRemaining").text("5");
			remainingGuesses = 5;
		}

		// clear userInput text
		$("#guess").val("");

		// reset the game when a user click on the rest button
		$("#reset").click(resetGame);
			
			function resetGame(){
				alert("Reset the game!");
				$("#numberOfGuessesRemaining").text("5");
				$(".message").removeClass("error").text("");
				$("#guess").val("");
				remainingGuesses = 5;
			}

	}


});


