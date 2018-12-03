var express = require("express")

var app = express()

app.set("view engine","jade")

app.get("/", function(req,res) {
    //res.send("Hola Mundo")
    res.render("index", {hola: "Hola Jesus Lopez"})
})

app.listen(3000, function() {
    console.log('Aplicacion ejemplo, escuchando el puerto 3000')
})
 
