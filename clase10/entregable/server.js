import express from 'express';
import routerProductos from './router/routerProductos.js';
import routerCarrito from './router/routerCarrito.js';
import bodyParser from 'body-parser';
import modulo from './src/contenedorProductos.js';


const app = express ();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

const productos = new modulo.Contenedor('dataBase')

app.use(express.static('public'));
app.use('/api/productos', routerProductos); 
app.use('/api/carrito', routerCarrito)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

