
var counter = 0;
// var userNumber;
// var compNumber;

$('#guessButton').click(guessOne);

function guessOne(event){
	event.preventDefault()
	counter +=1;
	console.log(counter);

	var userNumber;
	userNumber = parseInt($('#guess').val());
	console.log(userNumber);

	var compNumber = randomChoice();
	console.log(compNumber);

	if(counter < 6){
		$('#numberOfGuessesRemaining').text('5' - counter);
		runComparison(userNumber, compNumber);
	} else{
		alert('Too many guesses - you failed!');
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
	}
}

function compareNumbers(userNumber, compNumber){
	if(userNumber < compNumber){
		alert('Higher');
	} else if(userNumber > compNumber){
		alert('Lower');
	} else{
		alert('You guessed correctly!');
	}
}

function randomChoice(){
  return Math.floor((Math.random() * 100) + 1);
}









