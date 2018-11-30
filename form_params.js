var http = require("http")
var fs = require("fs")

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
    var arregloParametros = []
    var parametros = {}
    var nombre = ""

    if (req.url.indexOf("?") > 0 ) {
        // /?nombre=Jesus&data=algo => ['/','nombre=Jesus&data=algo']
        var urlData = req.url.split("?")
        // ['/','nombre=Jesus&data=algo'] => ['nombre=Jesus','data=algo']
        var arregloParametros = urlData[1].split("&")
    }

    console.log(arregloParametros)

    for (var i = arregloParametros.length - 1; i >= 0; i--) {
        var parametro = arregloParametros[i]

        //['nombre=Jesus','data=algo'] => ['nombre','Jesus','data','algo']
        var paramData = parametro.split("=")

        //[nombre,Jesus] => {nombre: Jesus}
        parametros[paramData[0]] = paramData[1]

    }

    console.log(parametros)

    console.log("Variables:"+variables)
    console.log("Variables Longitud:"+variables.length)
    
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