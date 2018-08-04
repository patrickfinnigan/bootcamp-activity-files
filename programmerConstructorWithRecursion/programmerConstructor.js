var inquirer = require("inquirer");

var count = 0;
var programmerArray = [];

var askQuestion = function () {
    if (count < 5) {

        function Programmer(name, title, age, language) {
            this.name = name;
            this.title = title;
            this.age = age;
            this.language = language;
            this.PrintProgrammer = function () {
                console.log("Name: " + this.name + "\nPosition: " + this.position +
                    "\nAge: " + this.age + "\nLanguages: " + this.language);
            };
        }


        inquirer.prompt([{
            name: "name",
            message: "What is your name?"
        }, {
            name: "title",
            message: "What is your current position?"
        }, {
            name: "age",
            message: "How old are you?"
        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }]).then(function(answers) {
            var newProgrammer = new Programmer (
                answers.name,
                answers.title,
                answers.age,
                answers.language,
            );
            console.log(newProgrammer);
            programmerArray.push(newProgrammer);
            count++;
            askQuestion();
        });


    } else {

        console.log("All questions asked");
        console.log('programmerArray', programmerArray);

    }
};

askQuestion();