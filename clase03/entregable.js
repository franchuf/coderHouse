const express = require ("express");
const fs = require ('fs');

const app = express ();

app.get("/productos", function(req, res){
    let nuevoArray = JSON.parse (fs.readFileSync("./productos.txt" ,'utf-8'))
    console.log(nuevoArray);
    return nuevoArray //si la consigna implica devolver los productos cuando se corre la funcion
})
app.get("/productoRandom", function(req, res){
    let nuevoArray = JSON.parse(fs.readFileSync("./productos.txt",'utf-8'))
    var x = Math.floor(Math.random()*(nuevoArray.length));
    console.log(nuevoArray[x]);
    return nuevoArray[x]
})

app.listen (8080, function(){
    console.log("server running on port 8080")
})