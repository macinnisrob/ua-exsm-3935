async function main() {
    let test = "JavaScript is fun!".includes("Java");

    // test.toUpperCase();

    output(typeof(test))

    // let leaderboard = [];
    // let choice;
    //
    // do {
    //     output("------------------");
    //     output("1. Play Game");
    //     output("2. View Highscores");
    //     output("3. Exit");
    //     output("------------------");
    //     choice = (await input("Enter your choice: ")).trim();
    //
    //     switch (choice) {
    //         case "1":
    //             leaderboard.push(await playGame());
    //             break;
    //         case "2":
    //             await viewHighScores(leaderboard);
    //             break;
    //         case "3":
    //             output("Goodbye!");
    //             break;
    //         default:
    //             output("Invalid choice, please try again.");
    //             break;
    //     }
    // } while (choice != "3");
}

function myfun(mystring) {
    output(mystring);
}

// async function playGame() {
//     output("--- Play Game ---");
//
//     let min = 1;
//     let max = 100;
//
//     const randomNumber = generateRandomInteger(min, max);
//
//     const numTries = await guessNumber(min, max, randomNumber);
//     output(`Congratulations! You guessed the number, and it took you ${numTries} tries to guess it!`);
//
//     return [await getUserName(), numTries]
// }
//
// function generateRandomInteger(min, max) {
//     // https://www.w3schools.com/js/js_random.asp
//     return Math.floor(Math.random() * (max - min) ) + min;
// }
//
// async function guessNumber(min, max, randomNumber) {
//     let numTries= 0;
//     let guess;
//
//     do {
//         numTries++;
//         guess = (await input(`Guess a number between ${min} and ${max}: `)).trim();
//
//         if (guess > randomNumber && guess <= max) {
//             output("Too high!");
//             max = guess;
//         }
//         else if (guess < randomNumber && guess >= min) {
//             output("Too low!");
//             min = guess;
//         }
//         else if (guess != randomNumber) {
//             output("Invalid guess!")
//         }
//     } while (guess != randomNumber);
//
//     return numTries;
// }
//
// async function getUserName() {
//     let user;
//     do {
//         user = (await input("Enter your name for the leaderboard: ")).trim();
//
//         // https://regex101.com non-whitespace character
//         if (!user.match(/\S/)) {
//             output("Error: You must enter a valid username.")
//         }
//     } while (!user.match(/\S/));
//
//     return user;
// }
//
// function viewHighScores(leaderboard) {
//     output("--- View Highscores ---");
//
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//     leaderboard.sort(function(a, b) {
//        return a[1] - b[1];
//     });
//
//     for (let i = 0; i < leaderboard.length; i++){
//         output(`${leaderboard[i][1]} - ${leaderboard[i][0]}`);
//     }
// }