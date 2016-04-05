$(function(){

	var userGuess, mysteryNumber, guessesRemaining;

	$("#reset").on("click", function(){
		guessesRemaining = 5;
		mysteryNumber = Math.floor(Math.random()*100)+1;
		$("#numberOfGuessesRemaining").text(guessesRemaining);
		$("#message").removeClass();
	});

	$("#guessButton").on("click", function(ev){
		ev.preventDefault();
		if (guessesRemaining !== 0){
			userGuess = parseInt($("#guess").val(), 10);
			if (!userGuess){
				$("#message").text("Enter a number");
				return;
			}
			if (userGuess === mysteryNumber){
				guessesRemaining = 0;
				$("#message").addClass("success").text("Congratulations! You've guessed the Mystery Number!");
				return;
			}
			if (userGuess < mysteryNumber){
				$("#message").text("Your guess is too low");
			}	else{
				$("#message").text("Your guess is too high");
			}
			guessesRemaining--;
			$("#numberOfGuessesRemaining").text(guessesRemaining);
			if (guessesRemaining === 0){
				$("#message").addClass("error").text("Sorry, you lose. The mystery number was " + mysteryNumber);
			}
		}
	});
// triggers button press without user input
	$("#reset").click();

});	