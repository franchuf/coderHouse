import express from 'express';
import routerCarrito from express.Router();
import bodyParser from "body-parser";
import ContenedorCarritos from '../src/contenedorCarritos.js'

routerCarrito.use(bodyParser.urlencoded({extended:true}))
routerCarrito.use(express.json())

const carritos = new ContenedorCarritos('carritoDB')

routerCarrito.get('/:id/productos', (req,res)=>{
    res.json (carritos.getByIdCarrito(Number(req.params.id)));
})

routerCarrito.post('/', (req, res)=>{
    res.json (carritos.save(req.body))
    
})
routerCarrito.get('/:id/productos', (req, res)=>{
    res.json(carritos.getByIdCarrito(Number(req.params.id)))
    
})


routerCarrito.post('/:id_carrito/productos/:id_producto', (req, res)=>{
    
    // res.json(parseInt(req.params.id_carrito) + " " + parseInt(req.params.id_producto)) ;
    res.json(carritos.addByIdProducto(Number(req.params.id_carrito),Number(req.params.id_producto)));
    
})

routerCarrito.delete('/:id_carrito/productos/:id_producto',(req,res)=>{
    res.json(carritos.deleteProductoById(Number(req.params.id_carrito),Number(req.params.id_producto)))
})

routerCarrito.delete('/:id',(req,res)=>{
    res.json(carritos.deleteCarritoById(Number(req.params.id)))
})

export default routerCarrito