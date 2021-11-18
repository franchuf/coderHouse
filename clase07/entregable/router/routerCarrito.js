const express = require ('express');
const routerCarrito = express.Router();
const bodyParser = require("body-parser");
const modulo = require ('../src/contenedor')
const modulo2 = require ('../src/contenedor2')

routerCarrito.use(bodyParser.urlencoded({extended:true}))
routerCarrito.use(express.json())

const carritos = new modulo2.Contenedor2('carritoDB')

routerCarrito.get('/:id/productos', (req,res)=>{
    res.json (carritos.getByIdCarrito(Number(req.params.id)));
})

routerCarrito.post('/', (req, res)=>{
    res.json (carritos.save(req.body))
    
})
routerCarrito.get('/:id/productos', (req, res)=>{
    res.json(carritos.getAll())
    
})
routerCarrito.post('/:id_carrito/productos/:id_producto', (req, res)=>{
    
    // res.json(parseInt(req.params.id_carrito) + " " + parseInt(req.params.id_producto)) ;
    res.json(carritos.addByIdProducto(Number(req.params.id_carrito),Number(req.params.id_producto)));
    
})

module.exports = routerCarrito;