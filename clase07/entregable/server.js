const express = require ("express");
const router = require("./router/webRoutes");
const bodyParser = require("body-parser")
const modulo = require ('./src/contenedor')


const app = express ();
app.use(bodyParser.urlencoded({extended:true}))



app.use(express.json())

const productos = new modulo.Contenedor('dataBase')

app.use(express.static('public'));
app.use('/api/productos', router); //router para postear productos
app.use('/carrito', router)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

