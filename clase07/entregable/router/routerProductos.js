const express = require ('express');
const routerProductos = express.Router();
const modulo = require ('../src/contenedor')
const bodyParser = require("body-parser")

routerProductos.use(bodyParser.urlencoded({extended:true}))
routerProductos.use(express.json())

const productos = new modulo.Contenedor('dataBase')
routerProductos.get('/', (req,res)=>{
    res.json(productos.getAll())
})
routerProductos.get('/:id',(req,res)=>{
    res.json(productos.getById(Number(req.params.id)))
})

routerProductos.post('/', (req, res)=>{
    productos.save(req.body)
    res.redirect('/')
})
routerProductos.put('/:id',(req,res)=>{
    res.json(productos.modifyById(req.params.id, req.body.title, req.body.price, req.body.thumbnail))
    
})
routerProductos.delete('/:id',(req,res)=>{
    res.json (productos.deleteById(Number(req.params.id)))
    
})

module.exports = routerProductos;