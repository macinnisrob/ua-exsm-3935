# EXSM 3935: JavaScript Fundamentals - JavaScript Decisions and Order of Operations
**Deadline:** Sunday Jul 23, 2023 at 11:59 PM  
[GitHub Classroom Link](https://classroom.github.com/a/oUbUHu0y)

## Introduction
This assignment is meant to be an exercise to help you apply the topic of switch statements, if/else statements, and order of operations in JavaScript. Follow the instructions below to complete the task, and be sure to read the hints if you are lost! If the hints do not help, be sure to reach out to us during homework help.

## Instructions:
Write a cashing program that takes three user inputs:
1. Total cost of goods
2. Cash payment from the customer
3. Discount codes (use a switch statement for this)
   - Discount code input of 0 gives no discount
   - Discount code input of 1 gives 10% off order
   - Discount code input of 2 gives 15% off order
   - Discount code input of 3 gives 25% off order
   - Discount code input of 4 gives 35% off order
   - Discount code input of 5 gives 40% off order
   - Default statement should be used for error checking in case of invalid entries
4. If the total of cash payment from the customer subtracted by the total cost of goods (after discount) is a negative amount, output the message “Insufficient Payment!”
5. Otherwise, print out the amount of change that the customer should receive, after taking into account the discount code

### Example Inputs/Output:
**Scenario 1:**  
Total cost of goods input: 30.00  
Cash payment from customer input: 20.00  
Discount code: 5  
Output: $2.00

**Scenario 2:**  
Total cost of goods input: 30.00  
Cash payment from customer input: 20.00  
Discount code: 1  
Output: “Insufficient Payment!”

## Criteria
**Total:** /10
