$(function(){

	var randomNumber = Math.floor(Math.random() * 101), 
		userGuess, 
		remainingGuesses = 4;

	$("#guess-button").click(function(guess){
   		event.preventDefault()
	});

	$("#guess-button").click(secret);
	$("#guess-button").click(guesses);
	$("#guess-button").click(numberOfGuessesLeft);
	
	$("#reset").click(resetGame);

	// generate the secret number and print it in the console
	function secret() {
		console.log(randomNumber);
	}

  	// setup messages for user guesses 
  	function guesses() {
  		userGuess = parseInt($("#guess").val());

	  	if (userGuess < randomNumber) {
			$(".message").text("Your guess is too low");

		} else if (userGuess > randomNumber){
			$(".message").text("Your guess is too high");

		} else if (userGuess === randomNumber){
			$(".message").text("You guessed correctly!");
			$(".message").attr("class", "success");
		} 
	}

	// setup up decrement
	function numberOfGuessesLeft(){
		if (remainingGuesses > 0) {
			$("#numberOfGuessesRemaining").text(remainingGuesses--)

		} else if (remainingGuesses === 0) {
			$("#numberOfGuessesRemaining").text(0)
			$(".message").text("You're out of guesses");
			$(".message").attr("class", "error");	
		} 
	}

	// setup reset button
	function resetGame(){
		location.reload();
	}
});
