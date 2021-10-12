const express = require ("express");
const fs = require ('fs');

const app = express ();
const modulo = require ("../clase02/promesas")

const contenedor = new modulo.Contenedor ("productos")

//contenedor.save({a:1});


let nuevoArray = JSON.parse (fs.readFileSync("./productos.txt" ,'utf-8'))

app.get("/productos", function(req, res){
    //console.log(req);
    res.sendFile (__dirname + "/productos.txt");//si la cosigna implica devolver los productos en el navegador
    console.log(nuevoArray)
    return nuevoArray //si la consigna impolica devolver los productos cuando se corre la funcion
})
app.get("/productoRandom", function(req, res){
    let nuevoArray = JSON.parse(fs.readFileSync("./productos.txt",'utf-8'))
    var x = Math.floor(Math.random()*(nuevoArray.length));
    console.log(nuevoArray[x])
})


app.listen (8081, function(){
    console.log("server running on port 8080")
})