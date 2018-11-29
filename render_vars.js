var http = require("http")
var fs = require("fs")

http.createServer(function(req, res){
   fs.readFile("./index.html", function(err,html){
    var htmlString = html.toString()   
    
    //Expresion regular que busca en el HTML donde este {x}
    var variables = htmlString.match(/[^\{\}]+(?=\})/g)

    var nombre = "Jesus Lopez Rodriguez"

    //variables ['nombre]
    for (var i = variables.length - 1; i >= 0; i--) {
        //Lo ejecutamos como codigo de javaScript
        //Para obtener el valor de dicha variable
        var value = eval(variables[i])
        
        htmlString = htmlString.replace("{"+variables[i]+"}",value)
    }

        res.writeHead(200,{
            "Content-Type":"text/html"
        })
        res.write(htmlString)
        res.end()
   })
}).listen(3000)