const express = require ("express");
const app = express ();

const frase = "hola mundo como estan"


app.get("/api/frase", function(req, res){
    console.log(req);
    res.json (frase)

})

app.get("/api/letras/:num", function(req, res){
    let mensaje = req.params.id
    res.json (mensaje);
})


app.listen (3000, function(){
    console.log("server running on port 3000")
    })