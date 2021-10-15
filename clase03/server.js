const express = require ("express");
const fs = require ('fs');
const modulo = require ('./src/promesas')

const app = express ();

const prueba = new modulo.Contenedor('prueba')
prueba.save({a:1})


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

app.listen (8041, function(){
    console.log("server running on port 8080")
})

const cont1 = new modulo.Contenedor("prueba")