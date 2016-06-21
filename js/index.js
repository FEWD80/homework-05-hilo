/******** Global Varibles *******/
var generatedNumber,
    $guess = $('#guess'),
    $message = $('.message'),
    turnsLeft = 5,
    isGameOver = false;
/******** Functions Begin *******/



var message = {
  notValid: function() {
    $message.addClass('error');
    $message.text('Enter a number between 1 and 100');
    },
  toHigh: function(number) {
    $message.text( number + ' is to hi');
  },
  toLow: function(number) {
    $message.text(number + ' is to low');
  },
  clear: function() {
    $message.removeClass('success error');
    $message.html('');
  },
  noTurnsLeft: function() {
    $message.addClass('error');
    $message.text('No more turns left the number was ' + generatedNumber);
  },
  playerWon: function() {
    $message.addClass('success');
    $message.html('Congragts the number was ' + generatedNumber);
  },
  gameOver: function() {
    $message.removeClass('success error');
    $message.text('Game Over please Reset');
  }
};

// Genertaes number with an even distrubtion
function randomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function validateNumb(numb) {
  var vaildEntry;
  numb = parseInt(numb);
  if ( numb >= 1 && numb <= 100) {
    validEntry = [true, numb];
    return validEntry;
  } else {
    message.notValid();
  }
}

var turns = {
  track: function(validation) {
    if (validation && turnsLeft > 0) {
      turnsLeft--;
    }
    $('#numberOfGuessesRemaining').text(turnsLeft);
  },
  reset: function() {
    turnsLeft = 5;
  }
};

function runGame(validation, number) {
  message.clear();
  turns.track(validation);
  if (isGameOver) {
    message.gameOver();
  } else if (validation && turnsLeft > 0) {
    if (number === generatedNumber) {
      message.playerWon();
      isGameOver = true;
      turnsLeft = 0;
    } else if (number < generatedNumber) {
      message.toLow(number);
    } else if (number > generatedNumber) {
      message.toHigh(number);
    }
  } else if (turnsLeft === 0) {
    message.noTurnsLeft();
    isGameOver = true;
  }

}

generatedNumber = randomNumber();
console.log('Computer number: ' + generatedNumber);

/******** Game Begins *******/

$('#guessForm').submit(function(event) {
  event.preventDefault();
  var playerChoice = validateNumb($guess.val());
  console.log(playerChoice);
  runGame(playerChoice[0], playerChoice[1]);
});

$('#reset').click(function(event) {
  isGameOver = false;
  turns.reset();
  $('#numberOfGuessesRemaining').text(turnsLeft);
  message.clear();
  generatedNumber = randomNumber();
  console.log(generatedNumber);
});
