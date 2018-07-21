// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
const fs = require("fs");

const userInput = process.argv[2];

const numberString = "1, 3, 6, 2, 12, 6, 94, 2, 45, 12, 76, 1, 43"

const compareSort = (a, b) => (a-b);




console.log(numberString.sort(compareSort));



switch (userInput) {
    case "sort":
        sort();
        break;

    default:
        break;
}
