# EXSM 3935: JavaScript Fundamentals - Functions
**Deadline:** Sunday Aug 13, 2023 at 11:59 PM  
[GitHub Classroom Link](https://classroom.github.com/a/Bhq1RI54)

## Introduction
This assignment is meant to be a graded assignment to assess your understanding of functions in JavaScript. Follow the instructions below to complete the task, and be sure to read the hints if you are lost! If the hints do not help, be sure to reach out to us during office hours.

## Instructions:
You will be updating your mock login system from previous assignments. Additions have been marked with **bold font**.

- When a user launches the program, they may choose one of the following options:
  - Register
  - Login
  - Quit

- If the user selects “register”, they should be asked for the following information:
  - Username (if username already exists, the user should be informed and the program should terminate).
  - Password (if the password is less than eight characters, the user should be informed that the password is too short, and the program should terminate).
  - **This functionality should be partially encapsulated in a `validatePassword(password)` function, where `password` is the password the user provides. It should return a boolean value depending if it is valid, and should not throw any exceptions - the exception should be thrown from `register()` based on the return of `validatePassword()`.**
  - If the username is unique, and the password is greater than or equal to eight characters, then the program should store the username and password in the dictionary.
  - If the username is unique and the password meets the requirements, the user should be given the message “Registration Successful!” before the program terminates. 
  - **This functionality should be encapsulated in a `register(accounts)` function, where `accounts` is a reference parameter to your dictionary.**

- If the user selects “login”, they should be asked for the following information:
  - Username (if the username does not exist, the user should be informed and the program should terminate).
  - Please note that the dictionary does not keep track of records over multiple sessions, so have a predefined dictionary of usernames (key) and passwords (value).
  - Password (if the password is incorrect, the user should be informed and the program should terminate).
  - If the password is less than eight characters, the user should be informed that the password they entered is too short and the program should terminate.
  - If the username and password are correct, the user should be given the message “Login Successful!” before the program terminates. 
  - **This functionality should be encapsulated in a `login(accounts)` function, where `accounts` is a reference parameter to your dictionary.**

- If the user selects “quit”, the program output “Goodbye!” and then terminate.

## Criteria
**Total:** /12
