const fs = require('fs')

var argumentos = process.argv;

var option = {
    encoding: "utf8",
    flag: "a"
}

var path = argumentos[2];
var arquivo = fs.readFile(path,option,(err,arquivo)=>{
    
    if(!err){
        console.log(arquivo)
    }
    
})

JSON.parse(arquivo)
    