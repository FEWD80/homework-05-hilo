var computerGenerated; 
var userGenerated; 
var counter = 0;


$(function(){

// At the start of each game the app should randomly generate the secret number

	$('#Guess').click('getRandomInt');

			function getRandomInt(event) {
				event.preventDefault();
		 		return parseInt(Math.floor(Math.random() * 100));
			}

// Users will be given 5 guesses

// If a user enters a guess and it is incorrect the following should happen:
// A notification will be displayed informing the user that their guess was either too low or too high

	
function runComparison(userGenerated, computerGenerated){
    if(userGenerated > 0 && userGenerated < 101){
        console.log('valid number');
        compareNumbers(userGenerated, userGenerated);
    } else{
        console.log('invalid number');
    }
}

function compareNumbers(userGenerated, computerGenerated){
    if(userGenerated < computerGenerated){
        alert('Too Low!');
    } else if(userGenerated > computerGenerated){
        alert('Too High!');
    } else{
        alert('You guessed the number!!');
    }
}


// The number of guesses remaining count will be decremented by 1

	$("#numberOfGuessesRemaining").click('changeCounter')

		function changeCounter(){

			if (counter < 6){
				$("#numberOfGuessesRemaining").text("5" - counter);
				console.log(counter);
			}

			else if (counter = 6){
				alert("You're out of guesses");
			}

		}

	};



// If a user enters a guess and it is correct the following should happen: (NOTE TO SELF: Include this in the "if" section)
	// The number of guesses remaining count will be reset back to 5


// If a user runs out of guesses (5) without correctly guessing the secret number the following should happen:
	// A notification will be displayed informing they user that they ran out of guesses and the game was over

// When users click on the reset button the following should happen:
	// The number of guesses remaining should be reset to 5
	// The message should be hidden
	// Apply the "success" class to the element containing the notification message when the user correctly guesses the secret number
	// Apply the "error" class to the element containing the notification message when the user runs out of guesses




























