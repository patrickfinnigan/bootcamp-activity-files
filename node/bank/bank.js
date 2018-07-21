const fs = require("fs");

let command = process.argv[2];
let amount = parseFloat(process.argv[3]);

// fs.readFile("bank.txt", "utf8", function (err, data) {
//             // console.log(data);
//             if (command === "total") {
//                 let dataSplit = data.split(",");
//                 const sum = dataSplit.reduce(add)
//                 // for (let i = 0; i < dataSplit.length; i++) {
//                 //     sum += dataSplit[i];
//                 // }
//                 console.log(sum)
//             } else if (command === "deposit") {
//                 fs.appendFile("bank.txt", ", " + amount, function () {
//                     if (err) {
//                         console.log("error!")
//                     }
//                     console.log(`${ammount} was deposited`)
//                 })
//             } else {
//                 console.log("Please enter a command")
//             }
//         });


// THE SWITCH CASE METHOD

function total() {
    fs.readFile("bank.txt", "utf8", function (err, data) {
            if (err) {
                console.log("error");
            }
            const transactions = data.split(",");
            let total = 0
            // console.log(transactions);
            transactions.forEach( amount => { 
                //do some logic with the ammount
                total += parseFloat(amount)
            });
            console.log("Your total is " + total.toFixed(2));
        })
    }






    // when the node reads "command"
    switch (command) {
        case "deposit":
            // add an amount to their account
            deposit();
            break;
        case "withdraw":
            //subtract an ammount
            withdraw();
            break;
        case "lotto":
            //buy a lottery ticket
            lotto();
            break;
        case "total":
            // display the total
            total();
            break;
        default:
            console.log("I don't know what you mean!");
            break;
    }