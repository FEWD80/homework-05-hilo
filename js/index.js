var count = 0;
var computerNumber = randomChoice();
var userGuess;

//the random choice generator needs to be extracted and placed in a separate function.
function randomChoice() {
	return Math.floor(Math.random() * 100 + 1);
}

$('#guess').click(generateCompare);
//create function that generates random number
//function also stores the number as val computer
function generateCompare (e){
	e.preventDefault();

	if(count === 5) {
		return;
	}

	userGuess = parseInt($("#guessForm input").val());

	if (isNaN(userGuess)) {
      userGuess = 0;
    }
    
    $("#guessForm input").val("");

    // Compare the numbers.
	if (userGuess === computerNumber) {
		$('body').css('background', 'green');
		$('.message').text('you-win');
	} else if (computerNumber > userGuess) {
		$('.message').text('too-low');

	} else {
		$('.message').text('too-high');
	}
 // else {
// }
   	
	count = count + 1;
	// count += 1;
	// count++;

	$('#numberOfGuessesRemaining').text(count);

	if (count===5) {
		$('body').css('background', 'red');
		$('.message').text('you-lose');
	}

	// I want to have the console test to return the original
  	console.log(computerNumber);
};




//keep count and  

	// if (count  = 5){
// 		if userGuess = computerNumber {

// 			alert('hello, its me');
// 		}
// // 	}
//problem is that the function generates new number every time
//write conditional that will stop the number from looping
$('#reset').click(function(){
	// location.reload();
	$('body').css('background', 'white');
	$('.message').text('');
	$('#numberOfGuessesRemaining').text(0);
	count = 0;
	computerNumber = randomChoice();

});

//"floor" - rounds down to the lowest number "ceiling" rounds up 


