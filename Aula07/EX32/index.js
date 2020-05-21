const express = require("express")
const app = express();

app.use(express.static(__dirname + "/style.css"));

app.listen(9090, ()=>{
    console.log("Servidor Online!")
})

app.get("/", (req,res)=>{
    console.log(__dirname +"/html/login.html")
    //res.sendFile(__dirname.slice(2)+ "/login.html")
})
app.post("/user", (req,res)=>{
    if(req.body.user == "root" && req.body.password == "unesc2019 "){
        res.sendFile(__dirname+ "/html/sucesso.html")
    }
})

