// GLobal Variables
//=========================================================
//Arrays and Variables for holding data
var wordOptions = ["jotaro", "kakyion", "avdol", "joseph", "polnareff", "iggy"];
//these will be the words that we will be guessing
// rememebr to divide these options out by quote marks
var selectedWord = "";
// this variable is empty because we intend to place our current word in this section when we need it
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses =[];
// a lot of these variables are empty because they will be accepting data that will come up during the game

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// Functions (( Reusable blocks of code that i will call upon when needed))
//=========================================================

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // this code selects a word from the wordOptions array. it determines what the selectedWord variable will be filled in with by going into word options, and replacing [i] with a mathematical formula that will select a random number between 0 and 1, round down, and multiply it by the length of the array. it then places that number in the wordOptions[i] and selects the word for selectedWord
    lettersInWord = selectedWord.split("");
    // the .split command is used to split any string into an array of substrings and sets them into a new array. here we see the lettersInWord variable is being made from the selectedWord, made from before, which is split into an array of letter strings from .split.
    numBlanks = lettersInWord.length;
    // numBlanks is created from the newly made string array of lettersInWord, which is made up of the letters in the selected word. it pretty much tells the program how may letters are in the chosen word

    //reset
    guesses = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    // even though we established these variables at the beginning of the program, we still need to reset then whenever we reload the program. having the variable values in the startGame function is important to clear off the values from the previous game

    //Populate blanks and successes with right number of blanks
    for (let i = 0; i < numBlanks.length; i++) {
        blanksAndSuccesses.push("_");
        
    }
    
    //change HTML to refelct round conditions
/*     document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("_"); */

    // always make arrays for every new variable made in a function
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}


//Main Process
//=========================================================
startGame()
// you MUST call upon a function like this in order for it to run. if you dont add the name of the function like this somewhere in your code, it will not run