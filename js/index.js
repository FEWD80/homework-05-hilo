

// 	function getGuessedNumber() { 
// // Generate a random number that won't change during the game
// // Grab the users input
// // This function will get the users number and compare it to a randomized number
// // User will get a message whether he or she guessed the generated number
// // Generate message whether correct or not
// // I user gets the correct answer, user wil get a notification on class message if correct or not
// // If user guesses wrong, a message will appear to try again
// // Attempts to retry will decrease from "#numberofguessesremaining"
// // Incerement the number of guesses 
// // check how many tries left and play through or not




// *****START*****
$(function() { 


var userEntry;
var computerEntry = getRandomNumber();
var counter = 5;

console.log(computerEntry);

function getRandomNumber() {
    return parseInt(Math.floor(Math.random() * 100) + 1);
    // event.preventDefault();
};

	$("#guessbutton").click(getUserInput);



function getUserInput(event) {
	event.preventDefault();
    userEntry = parseInt($('#guess').val());
    // alert('works');
    if(userEntry === computerEntry) {
        // alert("You guessed it right"); 
        $('.message').text('You guessed it Right');
        $('body').css('background-image', 'url(images/heaven.jpg)');
    }else if (userEntry < computerEntry) {
        // alert("Your guess was too low.");
        $('.message').text('Your guess was too low. Hope you brought a blanket.'); 
        $('body').css('background-image', 'url(images/cold.jpg)');
    }else if (userEntry > computerEntry) {
        // alert("Your guess was too high.");
        $('.message').text('Your guess was too high. BURN!!');
        $('body').css('background-image', 'url(images/hot.jpg)');
    }

    counter = counter - 1;
    // counter--;   ***same as the line above***
    $('#numberOfGuessesRemaining').text(counter);

    if(counter === 0) {
    	alert('You suck!!!');
} 

}


	$('#reset').click(resetGame);

	function resetGame() {
		event.preventDefault();
		$('#numberOfGuessesRemaining').text(5);
		
	if(counter === 0) {
		$('#numberOfGuessesRemaining').text(5);
	} else if (counter === 0) { 	
		$('body').css('background', 'white');
	} else if (counter === 0) { 
		$('.message').text(' ');
}
}


	

});
