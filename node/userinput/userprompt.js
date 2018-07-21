// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


// remember to install the npm in the command prompt with "npm install"

var inquire = require("inquirer")

inquire
    .prompt([
        {
            type: "input",
            message: "What is your name, boy?",
            name: "username"
        },
        {
            type: "confirm",
            message: "are you SURE about that name? sounds like a stupid name to me",
            name: "confirm",
            default: true
        },
        {
            type: "password",
            message: "alright well give us a password, and it better be good because idk how to encrypt things yet",
            name: "password",
        },
        {
            type: "confirm",
            message: "yeah are you sure about that password im gonna be honest its not a very good one",
            name: "confirm",
            default: true
        }
    ])

    .then( inquireResponse => {
        if (inquireResponse.confirm) {
            console.log(`hey there ${inquireResponse.username}`)
        } else {
            console.log(`
            hey
            what
            is
            up
            with
            this`)
        }
    });