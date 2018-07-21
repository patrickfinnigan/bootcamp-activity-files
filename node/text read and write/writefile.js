const fs = require("fs")
// fs is a package that node gives you for free, but if you want to use it then you have to require it above



// the text below was used to write the file "movie.txt". if you run this line of code again with new content, the old content will be overwritten
// fs.writeFile("movies.txt", "Paprika, Die Hard, Jaws", function() {
//     if (err) {
//         console.log("error!")
//     }
//     console.log("file movies.txt was written")
// })


// this code is to have node read the content of the file!
fs.readFile("movies.txt", "utf8", function(err, data) {
    console.log('data: ', data)
} )