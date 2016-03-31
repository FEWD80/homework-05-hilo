$(document).ready(function() {

	var secretNumber;
	var userGuess;
	var numberOfGuessesRemaining = 5;

	secretNumber = getRandomIntInclusive();

// app develops secret number in var secretNumber
// whole number
// between 1 and 100
	function getRandomIntInclusive(min, max) {
  		return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	}

// pull userGuess
	$("#guessButton").click(compare);

// compare userGuess with secretNumber
	function compare(event) {
		event.preventDefault();
		userGuess = parseInt($("#guess").val());
		console.log(secretNumber);
		console.log(userGuess);

// reduce numberOfGuessesRemaining
		numberOfGuessesRemaining = numberOfGuessesRemaining - 1;
		$("#numberOfGuessesRemaining").text(numberOfGuessesRemaining);

		if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
      		// alert("Please enter an amount between 1 and 100!");
      		$(".message").text("Please enter an amount between 1 and 100!");
    	}
// if the same, alert/type "Success!" in notification
		else if (userGuess === secretNumber) {
			// alert("Success!");
			$(".message").text("Success!");
			$("body").attr("class", "success");
		}
// depending on secretNumber, if userGuess is higher, notify "Guess lower number!"
		else if (userGuess > secretNumber) {
			// alert("Guess lower number!");
			$(".message").text("Guess a lower number!");
			$("body").attr("class", "error");
		}
// depending on secretNumber, if userGuess is lower, notify "Guess higher number!"
		else if (userGuess < secretNumber) {
			// alert("Guess higher number!");
			$(".message").text("Guess a higher number!");
			$("body").attr("class", "error");
		}
		else {

		}

		if (numberOfGuessesRemaining <= 0) {
			alert("Game over!");
			reset();
		}
		else {

		}
// clear number on #guess input field
		$("#guess").val("");

	};

	$("#reset").click(reset);

	function reset() {
		alert("Reset game!");
// numberOfGuessesRemaining will be reset to 5
		numberOfGuessesRemaining = 5;
		$("#numberOfGuessesRemaining").text(numberOfGuessesRemaining);
		$(".message").text("");
		$("body").attr("class", "reset");
		$(".message").attr("class", "message");
// regenerate new secretNumber
		secretNumber = getRandomIntInclusive();
	};

});

// make secretNumber the same value for 5 guesses
// with each userGuess, the number of guess text reduced until 0, then the user is unable to play
// 	if user tries to enter guess, notify "Game over!"
// if user clicks on #reset button, clear #numberOfGuessesRemaining to 5
// 	notification will clear
// 	regenerate secretNumber
