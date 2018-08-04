var inquirer = require("inquirer");

var count = 0;
var teamArray = [];

function Member(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        const goodGameCoinToss = Math.floor(Math.random() * 2);
        if (goodGameCoinToss === 0) {
            this.offense++;
            console.log("Heads! Offense up by 1!");
        } else {
            this.defense++;
            console.log("Tails! Defense up by 1!");
        }
    }
    this.badGame = function () {
        const badGameCoinToss = Math.floor(Math.random() * 2);
        if (badGameCoinToss === 0) {
            this.offense--;
            console.log("Heads! Offense down by 1!");
        } else {
            this.defense--;
            console.log("Tails! Defense down by 1!");
        }
    } 

    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense)
    }
}

var starters = [];
var subs = [];
var team = [];


var askQuestion = function () {
    if (count < 3) {


        inquirer.prompt([{
            name: "name",
            message: "What is this player's name?"
        },{
            name: "position",
            message: "What is their position?"
        },{
            name: "offense",
            message: "What is their offense?"   
        },{
            name: "defense",
            message: "What is their defense?"
        }]).then(function(answers) {
            var newMember = new Member (
                answers.name,
                answers.position,
                parseInt(answers.offense),
                parseInt(answers.defense)
            );
            console.log(newMember);
            teamArray.push(newMember);
            count++;
            askQuestion();
        });

    } else {

        console.log("All questions asked");
        console.log('teamArray', teamArray);

    }
};

askQuestion();