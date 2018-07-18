var firstNum = parseFloat(process.argv[3]);
var secondNum = parseFloat(process.argv[4]);
// parseFloat takes whatever entry given and turns it into a number, the Float part keeps decimal points intact with no rounding
var operand = process.argv[2]

if (operand === "add") {
    outputNum = firstNum + secondNum;
} else if (operand === "subtract") {
    outputNum = firstNum - secondNum;
} else if (operand === "multiply") {
    outputNum = firstNum * secondNum;
} else if (operand === "divide") {
    outputNum = firstNum / secondNum;
} else if (operand === "remainder"){
    outputNum = firstNum % secondNum;
}

console.log(outputNum);

