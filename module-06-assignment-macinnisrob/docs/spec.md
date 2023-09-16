# EXSM 3935: JavaScript Fundamentals - JavaScript Loops
**Deadline:** Sunday, Aug 20, 2023 at 11:59 PM  
[GitHub Classroom Link](https://classroom.github.com/a/Z1lhXdzE)

## Introduction
This assignment is a graded assignment to assess your understanding of the topic of loops in JavaScript. Follow the instructions below to complete the task, and be sure to read the hints if you are lost! If the hints do not help, be sure to reach out to us during office hours.

## Instructions:
In this assignment, you will create a number guessing game that will offer the player feedback such as “too high!” or “too low!” until the user correctly guesses the number. Your program will keep track of the number of guesses it takes for a user to correctly guess the number, and keep track of a high score for the session.

- Use a `do…while` loop to create a persistent main menu with the following options:
  - Play Game
  - View Highscores
  - Quit

- If a user selects “Play Game”, the user should be asked to guess a number with the following conditions:
  - The number will be between 1 to 100 and the number will be different in every playthrough (hint: recall the `Math.random()` function)
  - If the user’s guess is higher than the random number, they will be met with the feedback “Too high!” and asked to guess again
  - If the user’s guess is lower than the random number, they will be met with the feedback “Too low!” and asked to guess again
  - Wrong guesses can be repeated
  - The program should keep track of the number of attempts a player took before arriving at the correct guess
  - After the user correctly guesses the random number, they should be met with the following message: “Congratulations! You guessed the number, and it took you {number of tries} to guess it!”
  - The user should be asked to enter their name, to be entered in the highscores
  - The user must enter at least one non-whitespace character into this field, otherwise, the user is met with an error message and continuously asked to enter a name until the condition is met
  - After a user enters their name, their name and highscore should be stored, and the user should be returned to the main menu

- If a user selects “View Highscores”, the names and scores of all players for that session should be printed onto the console, using a `for` loop, before the user is returned to the main menu
  - Each player and their score should be on a new line

- If a user selects “Quit”, the program should print the message “Goodbye! Thanks for playing!” and terminate

- In all instances, if the user enters a faulty choice, the program should not terminate, but rather use a loop to ask the user to try again

## Criteria
**Total:** /12
