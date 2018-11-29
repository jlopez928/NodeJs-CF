var http = require("http")
var fs = require("fs")

http.createServer(function(req, res){
   fs.readFile("./index.html", function(err,html){
        res.wirteHead(200,{
            "Content-Type":"text/html"
        })
        res.write(html)
        res.end()
   })
}).listen(3000)