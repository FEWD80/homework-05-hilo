$(function() {
	// establish variable range
	var totalGuesses = 5;
	// user guess variable
	var userGuess;
	var computerGenerated = getRandomIntInclusive();
	// listen
	$("#submitGuess").click(calculate);
	$("#reset").click(resetGame);

		// generate random number
		function getRandomIntInclusive(min, max) {
  			return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		}

		function calculate(event){
			event.preventDefault();
			// convert text to integer
	    	userGuess = parseInt($("#guess").val());
	    	// make sure input is a valid number
			    if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
			      userGuess = alert("Please type a number between 1 and 100");
			  	}
			  	else{
			  		correctNumber();
			  	}
		    // clear the input field
		    $("#guess").val("")
		}

		function correctNumber(){	
			totalGuesses = totalGuesses - 1;
			$("#remainingGuesses").text(totalGuesses);
			    if(computerGenerated > userGuess){
			    	$('.message').html("Too low! Try again.");
			       	//Show message div only when there is a message
			       	$('.message').addClass('show');
			    	$('body').attr('class' , 'error');
			    }
			    else{
			    	$('.message').html("Too high! Try again.");
			    	$('.message').addClass('show');
			    	$('body').attr('class' , 'error');
			    }
		
				if(totalGuesses < 0){
					$('.message').html("GAME OVER: YOU LOSE!");
					$('.message').addClass('show');
					$('body').attr('class' , 'gameOver');
					$("#remainingGuesses").text('0');
				}
				else if(userGuess === computerGenerated){
			    	$('.message').html("YAY! YOU WIN!");
			    	$('.message').addClass('show');
				    $('body').attr('class' , 'success');
				    $("#remainingGuesses").text('0');
				    totalGuesses = 0;
				}
		    // print secret number to console
		    console.log(computerGenerated)
		}			
		function resetGame(){
		location.reload();
	}
});


		// function reset(){
		// 	totalGuesses = 5;
		// 	$("#numberOfGuessesRemaining").text(totalGuesses);
		// 	$('.message').html("");
		// 	$('.message').removeClass('show');
		// 	$('body').attr('class' , 'reset');
		// 	computerChoice = getRandomIntInclusive();
		// }
