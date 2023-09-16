async function main() {
    let accounts = {
        admin: "password",
        user: "password",
        poweruser: "password"
    };

    output("1. Register");
    output("2. Login");
    output("0. Quit");

    let menu_selection = await input("Select an option: ");

    if (menu_selection == 1) { // Register
        await register(accounts);
    }
    else if (menu_selection == 2) { // Login
        await login(accounts);
    }
    else if (menu_selection == 0) { // Quit
        output("Goodbye!");
    }
    else {
        throw new Error("Incorrect menu selection!");
    }
}

async function register(accounts) {
    try {
        let username = await input("Enter your username: ");
        
        if (accounts.hasOwnProperty(username)) {
            throw new Error("Username already exists");
        }
    
        let password = await input("Enter your password: ");
        validatePassword(password);
    
        accounts[username] = password;
        
        output("Registration successful!");
    }
    catch (exception) {
        output(exception);
    }
}

async function login(accounts) {
    try {
        let username = await input("Enter your username: ");
    
        if (!accounts.hasOwnProperty(username)) {
            throw new Error("Username does not exist");
        }
    
        let password = await input("Enter your password: ");
    
        validatePassword(password);
    
        if (password != accounts[username]) {
            throw new Error("Incorrect password");
        }
    
        output("Login Successful!");
    }
    catch (exception) {
        output(exception);
    }
}

function validatePassword(password) {
    if (password.length < 8) {
        throw new Error("Password must be 8 characters");
    }
}