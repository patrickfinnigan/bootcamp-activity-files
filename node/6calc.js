const number = parseInt(process.argv[2]);
let sum = 0;

for (let i = 6; i <= number; i+=6) {
    sum = sum + i;
}


if (number >= 6) {
    console.log("yeh");
} else {
    console.log("nah");
}

console.log("multiple output", sum);