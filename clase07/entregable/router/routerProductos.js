const express = require ('express');
const routerProductos = express.Router();
const modulo = require ('../src/contenedorProductos')
const bodyParser = require("body-parser")

routerProductos.use(bodyParser.urlencoded({extended:true}))
routerProductos.use(express.json())

function getUser() {
    return {
        name: 'francisco',
        admin : false,
    }
}
const middleware = (req,res,next) => {
    const user = getUser ()
    req.locals = {              //esta linea es crucial pq se esta llevando la variable user para poder usarla en el endpoint
        user,
    }
    next();
}

const productos = new modulo.Contenedor('dataBase')

routerProductos.get('/test',middleware,(req,res)=>{
    res.json({status:'ok'})
})


routerProductos.get('/', (req,res)=>{
    res.json(productos.getAll())
})
routerProductos.get('/:id',(req,res)=>{
    res.json(productos.getById(Number(req.params.id)))
})

//admin
routerProductos.post('/',middleware, (req, res)=>{
    
    const user = req.locals.user
    
    if (user.admin === false){
        res.json({error:-1,
            descripcion:  `ruta ${req.originalUrl} y metodo ${req.method} no autorizado `})
    }else {

    console.log(req.body)
    productos.save(req.body)
    res.json('producto cargado ok')
}})
//admin
routerProductos.put('/:id',middleware,(req,res)=>{
    const user = req.locals.user
    
    if (user.admin === false){
        res.json({error:-1,
            descripcion:  `ruta ${req.originalUrl} y metodo ${req.method} no autorizado `})
    }else {
        res.json(productos.modifyById(req.params.id, req.body.title, req.body.description, req.body.code,req.body.url,req.body.price,req.body.stock))
    }
    
    
    
})
//admin
routerProductos.delete('/:id',middleware,(req,res)=>{
    
    const user = req.locals.user
    
    if (user.admin === false){
        res.json({error:-1,
            descripcion:  `ruta ${req.originalUrl} y metodo ${req.method} no autorizado `})
    }else{
        res.json (productos.deleteById(Number(req.params.id)))
        
    }
    
})

module.exports = routerProductos;