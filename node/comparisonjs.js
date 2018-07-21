var a = parseFloat(process.argv[2])
var b = parseFloat(process.argv[3])

if (a === b) {
    console.log("equal");
} else {
    console.log("not equal");
}

// turnary methods
( a === b) ? console.log("equal") : console.log("not equal");
console.log((a === b) ? "ternary true" : "ternary false");


// checking multible of 7
if ((a % 7 === 0) && (b % 7 === 0)) {
    console.log("they are both multiples of 7")
} else {
    console.log("they are not multiples of 7")
}
