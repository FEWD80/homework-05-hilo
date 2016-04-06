var computerGenerated = getRandomInt(); 
var userGenerated; 
var counter = 5;


// At the start of each game the app should randomly generate the secret number


function getRandomInt() {
	return Math.floor(Math.random() * 100 + 1);
}


$('#submit').click(compareNumbers);
function compareNumbers(event){
	event.preventDefault();

	userGenerated = Number($('#guess').val());

	changeCounter();

    if(userGenerated < computerGenerated){
        alert('Too Low!');
    } else if(userGenerated > computerGenerated){
        alert('Too High!');
    } else {
        alert('You guessed the number!!');
    }
}


// The number of guesses remaining count will be decremented by 1
function changeCounter(){

	if (counter > 0){
		$("#numberOfGuessesRemaining").text(counter - 1);
		counter = counter - 1;
		$('#guess').val('');

		// counter -= 1;
		// counter--;
		console.log(counter);
	}

	else if (counter === 0){
		alert("You're out of guesses");
		reset();
	}
}

function reset() {
	counter = 5;
	computerGenerated = getRandomInt();
	$('#guess').val('');
	$("#numberOfGuessesRemaining").text(counter);
}

$('#reset').click(reset);