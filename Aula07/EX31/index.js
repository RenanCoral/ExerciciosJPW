const express = require("express");
const bodyParser = require('body-parser')
const fs = require("fs")
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(8080, ()=>{
    console.log("servidor online")
})
//app.use(express.static(__dirname + "/html/style.css"));
app.get("/",(req,res)=>{
    res.sendfile(__dirname + "/html/index.html")
})

app.post("/sobre",(req,res)=>{
    saveFile("/arquivo.md",req.body)
    res.send(
    "Item 1:  " + req.body.item1 +"</br>" +
    "Item 2:  " + req.body.item2 +"</br>" +
    "Item 3:  " + req.body.item3 +"</br>"
    )
})

function saveFile(path,file){

    var Option = {
        encoding: "utf8",
        flag: "w+"
    }

    fs.writeFileSync(__dirname + path, JSON.stringify(file), Option, (err) =>{
        if(err){
            console.log(err)
        }
    })
}