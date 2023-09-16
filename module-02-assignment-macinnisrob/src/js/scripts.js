async function main() {

    // Gather customer inputs
    const total_cost = await input("Enter the total cost of goods: ");
    const payment =  await input("Enter the payment received: ");
    const discount_code = await input("Enter a discount code: ");

    // Get the percent discount to apply to the total_cost
    let discount;
    switch (Number(discount_code)) {
        case 0:
            discount = 0;
            break;

        case 1:
            discount = 10;
            break;
    
        case 2:
            discount = 15;
            break;

        case 3:
            discount = 25;
            break;

        case 4:
            discount = 35;
            break;

        case 5:
            discount = 40;
            break;

        default:
            output("Output: Invalid discount code!");
            break;
    }

    // Calculate customer change
    const customer_change = payment - (total_cost - (discount / 100 * total_cost));

    if (customer_change >= 0) {
        output("Output: $" + customer_change.toFixed(2));
    }
    else if (customer_change < 0) {
        output("Output: Insufficient Payment!");        
    }
}
