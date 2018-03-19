var express = require('express')
var app = express()
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.post('register', function(req, res){
   
})