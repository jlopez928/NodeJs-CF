function parse(req) {
    var arregloParametros = []
    var parametros = {}

    if (req.url.indexOf("?") > 0 ) {
        // /?nombre=Jesus&data=algo => ['/','nombre=Jesus&data=algo']
        var urlData = req.url.split("?")
        // ['/','nombre=Jesus&data=algo'] => ['nombre=Jesus','data=algo']
        var arregloParametros = urlData[1].split("&")
    }

    for (var i = arregloParametros.length - 1; i >= 0; i--) {
        var parametro = arregloParametros[i]

        //['nombre=Jesus','data=algo'] => ['nombre','Jesus','data','algo']
        var paramData = parametro.split("=")

        //[nombre,Jesus] => {nombre: Jesus}
        parametros[paramData[0]] = paramData[1]

    }

    return parametros

}

module.exports.parse = parse;