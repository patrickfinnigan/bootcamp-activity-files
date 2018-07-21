// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder inquirer"!)
var geocoder = require('geocoder');
var inquire = require("inquirer")
// Geocoding




// Take in the command line arguments
inquire
  .prompt([{
    type: "input",
    message: "Where do you want to geocode?",
    name: "location"
  }]).then((userInput) => {
    geocoder.geocode(userInput.location, (error, data) => {
      console.log(JSON.stringify(data, null, 2));
    })
  });


// // Build your address as an array or string
// const address = inputCity + ", " + inputState;


// // Then use Geocoder NPM to geocode the address
// geocoder.geocode("Atlanta, GA", function ( err, data ) {
//   // do something with data
// });