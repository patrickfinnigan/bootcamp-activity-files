const fs = require("fs")

fs.readFile("things.txt", "utf8", function(err, data) {
    let dataSplit = data.split(",");
    for (let i = 0; i < dataSplit.length; i++) {
        console.log(dataSplit[i]);
    }
});
