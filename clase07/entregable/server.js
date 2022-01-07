const express = require ("express");
const routerProductos = require("./router/routerProductos");
const routerCarrito = require("./router/routerCarrito");
const bodyParser = require("body-parser")
const modulo = require ('./src/contenedorProductos')


const app = express ();
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

const productos = new modulo.Contenedor('dataBase')

app.use(express.static('public'));
app.use('/api/productos', routerProductos); 
app.use('/api/carrito', routerCarrito)
app.use('/*', function(req, res){
    console.log(req.params);
    res.json({error:-2,
        descripcion:  `ruta ${req.originalUrl}, metodo ${req.method} no implementado`});
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

