async function main() {
    let stored_credentials = {
        admin: "password",
        user: "password",
        poweruser: "password"
    };

    try {
        output("1. Register");
        output("2. Login");
        output("0. Quit");
    
        let menu_selection = await input("Select an option: ");
    
        if (menu_selection == 1) { // Register
            let username = await input("Enter your username: ");
    
            if (stored_credentials.hasOwnProperty(username)) {
                throw new Error("Username already exists");
            }
    
            let password = await input("Enter your password: ");
    
            if (password.length < 8) {
                throw new Error("Password must be 8 characters");
            }
    
            stored_credentials[username] = password;
            
            output("Registration successful!");
        }
        else if (menu_selection == 2) { // Login
            let username = await input("Enter your username: ");

            if (!stored_credentials.hasOwnProperty(username)) {
                throw new Error("Username does not exist");
            }

            let password = await input("Enter your password: ");
    
            if (password.length < 8) {
                throw new Error("Password must be 8 characters");
            }
            else if (password != stored_credentials[username]) {
                throw new Error("Incorrect password");
            }

            output("Login Successful!");
        }
        else if (menu_selection == 0) { // Quit
            output("Goodbye!");
        }
        else {
            throw new Error("Incorrect menu selection!");
        }
    }
    catch (exception) {
        output(exception);
    }
}

