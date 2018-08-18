var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var animals = [{
  animalType: "dog",
  pet: true,
  fierceness: 4
}, {
  animalType: "cat",
  pet: true,
  fierceness: 10
}, {
  animalType: "giraffe",
  pet: false,
  fierceness: 4
}, {
  animalType: "zebra",
  pet: false,
  fierceness: 8
}, {
  animalType: "lion",
  pet: false,
  fierceness: 10
}];

app.get("/dog", function (req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  res.render("dog", animals[0])
  // 1. Send the dog object from the animals array to the dog.handlebars file.

});

app.get("/all-pets", function (req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  let animalsToDisplay = [];
  // first we make an empty array for our pet objects to be placed in
  for (let i = 0; i < animals.length; i++) {
    // for each objec in the animals array...
    if (animals[i].pet === true) {
      // ... and for each object where the pet property of the object is set to "true"...
      animalsToDisplay.push(animals[i])
      //push the animals fulfilling those requirments into the animalsToDisplay array!
    }

  }
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  res.render("index", {
    // render the data you got from the get.app function, in this case the animalsToDisplay array that came out of the function, into the index.handlebars file...
    animals: animalsToDisplay
    // ...go to the animals loop in the index.handlebars, and apply the object properties into the render loop in that animals loop, applying the values of each property in their corresponding property handlebar
  })
});

app.get("/all-non-pets", function (req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  let animalsToDisplay = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].pet === false) {
      animalsToDisplay.push(animals[i])
    }

  }
  // 3. Send all the animals that are not pets to the index.handlebars file.
  res.render("index", {
    animals: animalsToDisplay
  })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});