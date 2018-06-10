var shapesList = [
    "circle",
    "square",
    "rectangle",
    "rhombus",
    "pentagon",
    "hexagon",
    "octagon"
];

var  currentWord = ""; 

var newWord = function() {
    var randomNumber = Math.floor(Math.random() * shapesList.length); // Math.random generates a random number between 0 and 1, which is multiplied by 
    currentWord = shapesList[randomNumber];
    printSpaces();
}

var printSpaces = function() {
    var spaceElement = document.getElementById('currentWord');
    var spaceString = '';
    for (var i = 0; i < currentWord.length; i++) {
        if(i == currentWord.length - 1) {
            spaceString += '_'
        } else {
            spaceString += '_ ';
        }
    }
    spaceElement.textContent = spaceString;
    console.log(spaceString)
}
