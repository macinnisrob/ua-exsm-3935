async function main() {
    let products = [
        [1234, 'Apple', 0.75],
        [1235, 'Orange', 0.99]
    ];

    let totalPrice = 0;
    let receiptContents = [];

    let itemCode;
    do {
        itemCode = (await input("Enter item code: ")).trim();

        if (itemCode !== "END"){
            let isValidCode = false;
            for (let i = 0; i < products.length && !isValidCode; i++) {
                if (products[i][0] == itemCode) {
                    isValidCode = true;

                    let count = 1;
                    for(let j = 0 ; j < receiptContents.length; j++){
                        if(receiptContents[j] == products[i]) {
                            count++;
                        }
                    }


                    totalPrice += products[i][2];

                    output("count: " + count);
                }
            }

            if (!isValidCode) {
                output("No such product found.");
            }
        }
    } while (itemCode !== "END");

    for (let i = 0; i < receiptContents.length; i++)
    {
        output(receiptContents[i]);
    }

    output(totalPrice);
}

// output("i products[i][0]: " + products[i][0]);
// output("i itemCode: " + itemCode);
//
// output("i receiptContents: " + receiptContents);
//
// if (receiptContents.length == 0) {
//     receiptContents.push(products[i].push(1));
// }
//
// for (let j = 0; j < receiptContents.length; j++) {
//     output("j receiptContents[j][0]: " + receiptContents[j][0]);
//     output("j itemCode: " + itemCode);
//
//     if (receiptContents[j][0] == itemCode) {
//         output("j receiptContents[j][0]++:");
//         receiptContents[j][3] = receiptContents[j][3] + 1;
//     }
//     else {
//         receiptContents.push(products[i].push(1));
//         output("NEWITEM!!!");
//
//     }
//
//     output(j);
//     output(receiptContents[j]);
//     await input();
// }