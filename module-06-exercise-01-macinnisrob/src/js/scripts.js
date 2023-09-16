async function main() {
    let menuChoice;

    while (menuChoice != "5")
    {
        output("Please choose one of the following options:")
        output("1. String Checker");
        output("2. Integer Checker");
        output("3. Year Checker");
        output("4. Date Checker");
        output("5. Quit Application");
        menuChoice = (await input("Option: ")).trim();

        if (menuChoice > 0 && menuChoice < 5){
            const checkValue = (await input("Please enter a string: ")).trim();

            switch (menuChoice) {
                case "1":
                    stringChecker(checkValue);
                    break;
                case "2":
                    integerChecker(checkValue);
                    break;
                case "3":
                    yearChecker(checkValue);
                    break;
                case "4":
                    dateChecker(checkValue);
                    break;
            }
        }
        else if (menuChoice == "5") {
            output("Goodbye!");
        }
        else {
            output("Invalid menu choice!")
        }
    }
}

function stringChecker(checkValue) {
    if (checkValue.match(/\d/)) {
        output("Contains a number!");
    }
}

function integerChecker(checkValue) {
    if (isNaN(checkValue)) {
        output("Not a number!");
    }
}

function yearChecker(checkValue) {
    if (isNaN(checkValue) || checkValue < 1900 || checkValue > 2023) {
        output("Not a year!");
    }
}

function dateChecker(checkValue) {
    // https://stackoverflow.com/a/53084184
    // Adjusted to prevent longer strings
    if (!checkValue.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/)) {
        output("Not a Date!");
    }

    // // https://www.geeksforgeeks.org/how-to-check-a-date-is-valid-or-not-using-javascript/
    // I used the previous example because it seemed more like what the question was asking for,
    // but this is probably a more reliable solution.
    //
    // const date = new Date(checkValue);
    //
    // if (isNaN(date.getDate())) {
    //      output("Not a Date!");
    // }
}
