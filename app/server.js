var express = require('express')
var app = express()
var loginRoutes = require('./login/loginController.js')

app.use(loginRoutes)

app.listen(3000, function(){
    console.log("serverrunnif")
})