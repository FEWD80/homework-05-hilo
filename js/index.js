var userEntry;
var computerEntry = getRandomInt();
var counter = 4;

// step 1. generate a random number that is stored in a variable
// step 2. grab the users input
// step 3. compare the two 
// step 4a. if the two match, user wins
// step 4b.	if the user's number is higher, user loses, gets message
// step 4c. if the user's number is lower, user loses, gets message
// step 5. decrement the number of guesses remaining
// step 6. check how many you've played have remaining

function getRandomInt() {
	return parseInt(Math.floor(Math.random() * 100) + 1);
	// event.preventDefault();
};

$("#guessbutton").click(getUserInput);

function getUserInput() {
	userEntry = parseInt($('#guess').val());

	if(userEntry === computerEntry) {
		$('.message').text("You guessed it right");
		$('.message').attr("class", ".success");
		event.preventDefault(); 
	}else if (userEntry < computerEntry) {
		$('.message').text("Your guess was too low.");
		event.preventDefault();
	}else if (userEntry > computerEntry) {
		$('.message').text("Your guess was too high.");
		event.preventDefault();
	}
}

// write a function that counts every time you guess
// write a function that decrements the numberofguessesRemaining by each guess
// when it reaches 0, show error message

$('#guessbutton').click(numberOfGuessesLeft);

function numberOfGuessesLeft() {
	if (counter > 0) {
		$("#numberOfGuessesRemaining").text(counter--);
	}
	else if (counter === 0) {
		$("#numberOfGuessesRemaining").text(0);
		$('.message').text("You have run out of guesses.");
		$('.message').attr("class", ".error");
	}
}

// should reset your variable that defines your number of guesses
// should update the thing that shows the number 5
// should generate a new secret number
// should empty the input field
// should reset the message field

$('#reset').click(resetgame);

function resetgame() {
	location.reload();
	// counter = 4;
	// $('#numberOfGuessesRemaining').text(5);
	// computerEntry = getRandomInt();
	// $('#guess').val('');
	// $('.message').text('');
}



