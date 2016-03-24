#FEWD80 Homework #5 - HiLo

<br>

---

###Description

This week you will be building the classic game of High Low where the player guesses a number in a specified range and the application will provide context clues (guess was too high or too low) to guide the player to the correct number.

<br>

---

###Technical Requirements

- At the start of each game the app should randomly generate the secret number (it should be a whole number)
- Users will be given 5 guesses
- If a user enters a guess and it is **incorrect** the following should happen:
 - A notification will be displayed informing the user that their guess was either too loo or too high
 - The number of guesses remaining count will be decremented by 1

- If a user enters a guess and it is **correct** the following should happen:
  - A notification will be displayed informing the user that their guess was correct
  - The number of guesses remaining count will be reset back to 5

- If a user runs out of guesses (5) without correctly guessing the secret number the following should happen:
  - A notification will be displayed informing they user that they ran out of guesses and the game was over

- When users click on the reset button the following should happen:
  - The number of guesses remaining should be reset to 5
  - The message should be hidden

- Apply the "success" class to the element containing the notification message when the user correctly guesses the secret number
- Apply the "error" class to the element containing the notification message when the user runs out of guesses
