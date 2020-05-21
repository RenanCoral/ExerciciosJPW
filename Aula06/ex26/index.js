const fs = require('fs')

var arquivo = fs.readFileSync("AUTHOR.md", "utf8",) // leitura de arquivo
console.log(arquivo)

var argumentos = process.argv;

var total = 0;
argumentos.forEach(element => {
    if(element % 2 == 0){
        total += parseInt(element);
    }
});
console.log(total);