var http = require("http")
var fs = require("fs")
var parser = require('./params_parser.js')

var p = parser.parse

http.createServer(function(req, res){

    if(req.url.indexOf("favicon.ico") > 0 ){
        return;
    }

    /*console.log("====\n\n")
    console.log(req)
    console.log("====\n\n")*/

   fs.readFile("./index.html", function(err,html){
    var htmlString = html.toString()   
    var variables = htmlString.match(/[^\{\}]+(?=\})/g)
    var nombre = "Jesus"

    var parametros = p(req)

    for (var i = variables.length - 1; i >= 0; i--) {
        //[nombre,Jesus]
        //var variable = variables[i]
        //parametros[variable]
        //parametros[nombre]
        htmlString = htmlString.replace("{"+variables[i]+"}", parametros[variables[i]])
    }
        res.writeHead(200,{
            "Content-Type":"text/html"
        })
        res.write(htmlString)
        res.end()
   })
}).listen(3000)