var generatedNumber,
    playerChoice,
    choicesLeft = 5,
    gameOver = false,
    $guess = $('#guessButton'),
    $guessLeft = $('#numberOfGuessesRemaining'),
    $guessInput = $('#guess'),
    $message = $('.message'),
    $reset = $('#reset');
    gameOverMessage = 'Game over press reset to play again',
    guessToHi = 'Your guess was to high',
    guessToLow = 'Your guess was to low',
    correctGuessMessage = 'You win the number was ';
var palyerNumb;

// Genertaes number with an even distrubtion
function randomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

generatedNumber = randomNumber();
console.log('Computer number: ' + generatedNumber);

// function to generate and validate player number
// function decrease choicesLeft if number is valid so player wont lost turn on miss typed entry
function playerGuess() {
  playerChoice = parseInt($guessInput.val());
  $guessInput.val('');
  if (isNaN(playerChoice) || playerChoice < 1 || playerChoice > 100) {
    $message.attr('class', 'error');
    $message.text('Please enter a number between 1 and 100');
  } else {
    $message.attr('class', 'message');
    $message.text('');
    choicesLeft--;
    return playerChoice;
  }
}

// function to validate game choice and print correct number
function gameValidation() {
  // Checks to see if game is already completed
  if (gameOver) {
    $message.attr('class', 'error');
    $message.text(gameOverMessage);
  } else {
    // Checks to see if player number is higer lower or matches random number
    if (playerNumb > generatedNumber) {
      $message.text(guessToHi);
    } else if (playerNumb < generatedNumber) {
      $message.text(guessToLow);
    } else if (playerNumb === generatedNumber) {
      $message.attr('class', 'success');
      $message.text(correctGuessMessage + generatedNumber);
      gameOver = true;
      choicesLeft = 0;
      $guessLeft.text(choicesLeft);
    }
  }

}


// start game functions on click event
$guess.click(function(event) {
  event.preventDefault();
  if (choicesLeft === 0) {
    $message.text(gameOverMessage);
    $message.attr('class', 'error');
    $guessInput.val('');
  } else {
    playerNumb = playerGuess();
    $guessLeft.text(choicesLeft);
    console.log('Player choice: ' + playerNumb);
    gameValidation();
  }

});
// Reset button to start game over
$reset.click(function(event) {
  event.preventDefault();
  generatedNumber = randomNumber();
  console.log('Computer number: ' + generatedNumber);
  choicesLeft = 5;
  $guessLeft.text(choicesLeft);
  $guessInput.val('');
  $message.text('');
  $message.attr('class', 'message');
  gameOver = false;
});
