
var counter = 0;
var compNumber = randomChoice();
	console.log(compNumber);

$('#guessButton').click(guess);

function guess(event){
	event.preventDefault()
	counter +=1;
	console.log(counter);

	var userNumber;
	userNumber = parseInt($('#guess').val());
	console.log(userNumber);

	if(counter < 6){
		$('#numberOfGuessesRemaining').text('5' - counter);
		runComparison(userNumber, compNumber);
	} else{
		$('.message').addClass('error');
		$('.message').text('Too many guesses - you failed!');
		$('#numberOfGuessesRemaining').text('0');
	}

	$('#guess').val(""); //clear number from input field
}

function runComparison(userNumber, compNumber){
	if(userNumber > 0 && userNumber < 101){
		console.log('valid number');
		compareNumbers(userNumber, compNumber);
	} else{
		console.log('invalid number');
		alert('You must enter a number between 1 - 100');
	}
}

function compareNumbers(userNumber, compNumber){
	if(userNumber < compNumber){
		$('.message').text('Higher');
	} else if(userNumber > compNumber){
		$('.message').text('Lower');
	} else{
		$('.message').addClass('success');
		$('.message').text('You guessed correctly!');
		$('#numberOfGuessesRemaining').text('5');
	}
}

function randomChoice(){
  return Math.floor((Math.random() * 100) + 1);
}

// <----------------RESET GUESSES--------------------> 

$('#resetButton').click(resetGuesses);

function resetGuesses(event){
	var counter = 0;
	$('#numberOfGuessesRemaining').text('5');
	$('#guess').val("");
	var compNumber = randomChoice();
	console.log(compNumber);
}









