const express = require ('express');
const routerCarrito = express.Router();
const bodyParser = require("body-parser");
const modulo = require ('../src/contenedorProductos')
const modulo2 = require ('../src/contenedorCarritos');
const { application } = require('express');

routerCarrito.use(bodyParser.urlencoded({extended:true}))
routerCarrito.use(express.json())


const carritos = new modulo2.Contenedor2('carritoDB')


routerCarrito.get('/:id/productos', (req,res)=>{
    res.json (carritos.getByIdCarrito(Number(req.params.id)));
})


//admin
routerCarrito.post('/',(req, res)=>{
    
        res.json (carritos.save(req.body))
    
    
})

routerCarrito.get('/:id/productos', (req, res)=>{
    res.json(carritos.getByIdCarrito(Number(req.params.id)))
    
})

//post('/:id_carrito/productos/:id_producto') 

//admin
routerCarrito.post('/:id_carrito/productos/:id_producto', (req, res)=>{
        res.json(carritos.addByIdProducto(Number(req.params.id_carrito),Number(req.params.id_producto)));
        
    
    
})


//admin
routerCarrito.delete('/:id_carrito/productos/:id_producto',(req,res)=>{

        res.json(carritos.deleteProductoById(Number(req.params.id_carrito),Number(req.params.id_producto)))
})

//admin
routerCarrito.delete('/:id',(req,res)=>{
    
        res.json(carritos.deleteCarritoById(Number(req.params.id)))

    
    
})


module.exports = routerCarrito;