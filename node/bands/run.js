const bands = require("./bands")

for (var key in bands) {
    // console.log("A " + key + " band is " + bands[key] + ".")
    console.log(`A ${key} band is ${bands[key]}`)
}

console.log(`a rap group
would be ${bands.rap}`)

console.log(`a classic band
would be ${bands.classic}`)

console.log(`a punk band 
would be ${bands.punk}`)


