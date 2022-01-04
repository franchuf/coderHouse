const express = require ('express');
const routerCarrito = express.Router();
const bodyParser = require("body-parser");
const modulo = require ('../src/contenedorProductos')
const modulo2 = require ('../src/contenedorCarritos');
const { application } = require('express');

routerCarrito.use(bodyParser.urlencoded({extended:true}))
routerCarrito.use(express.json())

function getUser() {
    return {
        name: 'francisco',
        admin : false,
    }
}

const middleware = (req,res,next) => {
    const user = getUser ()
    req.locals = {
        user,
    }
    next();
}



routerCarrito.get('/test',middleware,(req, res)=>{
    const user = req.locals.user
    res.json({status:'ok', 
    user,
        })
})

const carritos = new modulo2.Contenedor2('carritoDB')


routerCarrito.get('/:id/productos', (req,res)=>{
    res.json (carritos.getByIdCarrito(Number(req.params.id)));
})


//admin
routerCarrito.post('/',middleware, (req, res)=>{
    const user = req.locals.user
    if(user.admin === false){
        res.json ({status:'no tiene permisos'})
    } else {
        res.json (carritos.save(req.body))
    }
    
})

routerCarrito.get('/:id/productos', (req, res)=>{
    res.json(carritos.getByIdCarrito(Number(req.params.id)))
    
})

//post('/:id_carrito/productos/:id_producto') 

//admin
routerCarrito.post('/:id_carrito/productos/:id_producto',middleware, (req, res)=>{
    const user = req.locals.user
    if(user.admin === false){
        res.json ({status:'no tiene permisos'})
    } else {
        res.json(carritos.addByIdProducto(Number(req.params.id_carrito),Number(req.params.id_producto)));
        
    }
    
})


//admin
routerCarrito.delete('/:id_carrito/productos/:id_producto',middleware,(req,res)=>{
    const user = req.locals.user
    if(user.admin === false){
        console.log(req.route.path)
        res.json ({error:-1,
            descripcion:  'ruta ' + req.route.path + ' no autorizada' + 'metodo ' + req.method + ' no impolementado'})

    } else {
        res.json(carritos.deleteProductoById(Number(req.params.id_carrito),Number(req.params.id_producto)))
        
    }
    
    
})

//admin
routerCarrito.delete('/:id',middleware,(req,res)=>{
    
    const user = req.locals.user
    if(user.admin === false){
        res.json ({status:'no tiene permisos'})
    } else {
        res.json(carritos.deleteCarritoById(Number(req.params.id)))

    }
    
})

routerCarrito.get('/*', function(req, res){
    console.log(req.params);
    res.json({error:-2,
        descripcion:  'ruta ' + JSON.stringify(req.params) + 'metodo ' + req.method + ' no implementado'});
  });
module.exports = routerCarrito;