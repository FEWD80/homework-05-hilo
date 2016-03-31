$(function() {
	// variable to determine total number of guesses had - 5 guesses total
	var totalGuesses = 5;
	// declare variable that will be used to track the guess entered
	var userGuess;
	var computerChoice = getRandomIntInclusive();

	$("#guessButton").click(calculate);
	$("#reset").click(reset);

		function getRandomIntInclusive(min, max) {
		// Returns a random integer between min (included) and max (included)
		  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		  console.log(getRandomIntInclusive);
		}

		function calculate(event){
			event.preventDefault();
			// get information entered into the text field and convert it to a Integer
	    	userGuess = parseInt($("#guess").val());
	    	// set enteredAmount to 0 if the user enters input that is "not a number"
			    if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
			      userGuess = alert("Please type a number between 1 and 100");
			  	}else{
			  		winningNumber();
			  	}
		    // clear the amount entered into the text field
		    $("#guess").val("")
		}

		function winningNumber(){	
			totalGuesses = totalGuesses - 1;
			$("#numberOfGuessesRemaining").text(totalGuesses);
			    if(computerChoice > userGuess){
			    	$('.message').html("Guess a higher number!");
			    	$('body').attr('class' , 'error');
			    }
			    else{
			    	$('.message').html("Guess a lower number!");
			    	$('body').attr('class' , 'error');
			    }
		
				if(totalGuesses <= 0){
					$('.message').html("Game Over");
					$('body').attr('class' , 'gameOver');
					$("#numberOfGuessesRemaining").text('0');
				}
				else if(userGuess === computerChoice){
			    	$('.message').html("You Win!");
				    $('body').attr('class' , 'success');
				    $("#numberOfGuessesRemaining").text('0');
				    totalGuesses = 0;
				}
				else{
				}
		    console.log(computerChoice)
		}			

		function reset(){
			totalGuesses = 5;
			$("#numberOfGuessesRemaining").text(totalGuesses);
			$('.message').html("");
			$('body').attr('class' , 'reset');
			computerChoice = getRandomIntInclusive();
		}
});
