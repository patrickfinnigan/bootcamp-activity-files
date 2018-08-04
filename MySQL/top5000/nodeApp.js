var inquire = require("inquirer");

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: "root",

//     // Your password
//     password: "root",
//     database: "big_data_musicDB"
// });


console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
welcome to the top5000 data app demo!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
inquire
    .prompt([{
        type: "list",
        message: "How do you want to search for your song?",
        choices: ["Artist", "Title", "Year"],
        name: "search_option"
    }]).then( function(response) {
        // switch (answer)
        if ("search_option" === "Artist") {
            inquire
                .prompt([{
                    type: "input",
                    message: "What artist are you looking for?",
                    name: "artist_search"
                }])
        } else {

        }


    });