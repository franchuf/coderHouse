const {Router} = require('express')
//o lo que es lo mismo:
// const express = require('express')
// const Router = express.Router

const routerMascotas = Router()


const mascotas = [];


routerMascotas.get ('/', (req,res)=>{
    res.json(mascotas)
})

routerMascotas.post('/', function(req, res){
    mascotas.push(req.body);
    res.json (mascotas);
})


module.exports = routerMascotas;
 //exporta la constante que es una funcion