
/*
27. Implemente um pacote capaz de solicitar ao usuário uma sequência de palavras.
Ao final, o programa deve salvar todas as palavras em um arquivo de texto (de
preferência no formato JSON ). No entanto, o arquivo não poderá conter palavras
repetidas ou nulas.
*/


const fs = require('fs')

var arquivo = fs.readFileSync("AUTHOR.md", "utf8",) // leitura de arquivo
console.log(arquivo)

var argumentos = process.argv;

var Option = {
    encoding: "utf8",
    flag: "w+"
}

fs.writeFileSync("AUTHOR.md", JSON.stringify(argumentos), Option, (err) =>{
    if(err){
        console.log(err)
    }
})