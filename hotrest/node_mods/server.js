var express = require('express')
// express makes routing easy by using Node.js
var bodyParser = require('body-parser')
// bodyParser allows us to recieve our info back in JSON form
var path = require('path')
// path is necessary for writing our routes from the routing API and HTML files

var app = express()
var PORT = process.env.PORT || 8080
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

  app.listen(PORT, function(){
      console.log("App listening on PORT " + PORT);
  });

//all this data is easily copied and pasted fron the npm pages for each of the npm packages listed here
// its just a matter of finding the initializing code segments of each!