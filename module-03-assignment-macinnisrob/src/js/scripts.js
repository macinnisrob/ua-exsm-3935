async function main() {

    // Gather customer inputs
    const total_cost = await input("Enter the total cost of goods: ");
    const payment =  await input("Enter the payment received: ");
    const discount_code = await input("Enter a discount code: ");

    try {
        // Get the percent discount to apply to the total_cost
        let discount;
        switch (discount_code) {
            case "0":
                discount = 0;
                break;

            case "1":
                discount = 0.1;
                break;
        
            case "2":
                discount = 0.15;
                break;

            case "3":
                discount = 0.25;
                break;

            case "4":
                discount = 0.35;
                break;

            case "5":
                discount = 0.4;
                break;

            default:
                throw Error("Invalid discount code!");
                break;
        }

        // Validate input data types
        if (isNaN(total_cost)) {
            throw Error("Total cost must be a number!");
        }

        if (isNaN(payment)) {
            throw Error("Payment must be a number!");
        }

        // Calculate customer change
        const customer_change = payment - (total_cost - (discount * total_cost));

        if (customer_change >= 0) {
            output("Output: $" + customer_change.toFixed(2));
        }
        else if (customer_change < 0) {
            throw Error("Insufficient Payment!");        
        }
    }
    catch(err) {
        output(err);
    }
}
