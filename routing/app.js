var express = require("express")

var app = express()

app.set("view engine","jade")

//Verbos Http => GET, POST, PUT, PATCH OPTIONS, HEADERS, DELETE

app.get("/", function(req,res) {
    //res.send("Hola Mundo")
    res.render("index")
})

app.post("/",function(req,res){
    res.render("form")
})

app.get("/algo",function(req,res){
    res.render("form")
})

/*app.get("/:nombre",function(req,res){
    console.log(req.params.nombre)
    res.render("form")
})*/

app.get("/:nombre",function(req,res){
    res.render("form", {nombre: req.params.nombre})
})

app.listen(3000, function() {
    console.log('Aplicacion ejemplo, escuchando el puerto 3000')
})
 
