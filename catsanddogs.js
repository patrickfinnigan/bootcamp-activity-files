const command = process.argv[2];

const dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {console.log(this.noise)}
    // remember to use functions when using node! these are how 
}

const cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {console.log(this.noise)}
}

if (command === "dogs") {
    dogs.makeNoise()
} else if (command === "cats") {
    cats.makeNoise()
}

