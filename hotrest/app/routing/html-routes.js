 // the html-routes file is to help direct the user
 // its used for website navigation, like clicking on page links and loading different page files from the public file

 var path = require('path')
// using path here means we can have our routing files be accessed by the server file

//based on the users URL, you want to send them different pages
// in order to do this, you have to take the public files and be able to send them via express


// using module.exports in this particular way, we can export entire functions out into other files
module.exports = function (app) {

    // viewed at http://localhost:8080
    app.get('/tables', function(req, res) {
    //first, we set the main page by having nothing in the file path
    //we do this by simply having the forwardslash blank
    // in otherwords, whenever we get the root, or the "/" from the user, we execute the function, which will show home.html
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
        //then we add our result with res, so that whenever we access the main page, the "result" will be the command starting with res
        //in this case, grabbing the home.html file and posting it in the directory!
    });

}