# EXSM 3935: JavaScript Fundamentals - JavaScript Loops Exercise 02
**Deadline for Feedback:** Wednesday, Aug 16, 2023 at 11:59 PM  
[Exercise Link](https://classroom.github.com/a/LMFZC8hL)

## Introduction
This exercise is meant to be an exercise to help you apply the topics of loops and arrays in JavaScript. Follow the instructions below to complete the task, and be sure to read the hints if you are lost! If the hints do not help, be sure to reach out to us.

## Instructions:
The store that used your cashing system was so impressed with your work that they’ve decided to commission another system from you. This time, they want you to create a system which takes in four-digit product codes, looks up the item name and price, and keeps track of the total price and the item on a receipt. Read the hints below very carefully.

- Make a 2D array with the item code, followed by the item name, and then the price (for example: 
  ```javascript
  [
    [1234, 'Apple', 0.75], 
    [1235, 'Orange', 0.99]
  ]
  ```)
- Initiate a variable to keep track of the total price
- Initiate an array to keep track of the receipt contents
- When the user enters an item code, use a loop to go through every product available to see if the product exists, if it exists, the item name should be added to the receipt array and the price should be added to the total price variable 
- If the product does not exist, the program should output the message “No such product found.” and prompt the user to enter another product code - the program should not terminate!
- When the user inputs “END”, your program should display the total price, followed by the receipt items. Use a loop to keep the program running, with the loop break condition being when the user inputs “END”

**BONUS:** On the receipt output, if multiple items of the same code are in the receipt, group them together with a quantity number.
