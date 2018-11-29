var http = require("http")

var manejeador = function(solicitud, respuesta){
    console.log("Recibimos una peticion")
    respuesta.end("Hola Mundo")
}

var servidor = http.createServer(manejeador)

servidor.listen(3000)




