var express = require('express')
var app = express()
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    res.send("test");
    res.end();
})
app.post('/login', function(req, res){
    console.log(req.body.data)
    res.send("req")
    res.end()
})

module.exports = app;