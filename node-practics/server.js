const express = require('express')
const app = express()
var PORT = 3000;
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.get('/', function (req, res) {
  res.send('Hello World')
})

 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})