const express = require ("express");
const fs = require ('fs');
const modulo = require ('./src/promesas')

const app = express ();

const prueba = new modulo.Contenedor('prueba')
prueba.save({a:1})


app.get("/productos", function(req, res){
    let nuevoArray = JSON.parse (fs.readFileSync("./productos.txt" ,'utf-8'))
    console.log(nuevoArray);
    res.json(nuevoArray)  //si la consigna implica devolver los productos cuando se corre la funcion
})
app.get("/productoRandom", function(req, res){
    let nuevoArray = JSON.parse(fs.readFileSync("./productos.txt",'utf-8'))
    var x = Math.floor(Math.random()*(nuevoArray.length));
    console.log(nuevoArray[x]);
    res.json(nuevoArray[x])
})

const listener = app.listen (8080, function(){
    console.log('listening on port ' + listener.address().port);
})

const cont1 = new modulo.Contenedor("prueba")