const express = require ("express");
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const routerProductos = require("./router/routerProductos");
const bodyParser = require("body-parser")
const modulo = require ('./src/contenedor')
//const mensajesApi = require('./src/mensajes')
const fs = require ('fs')


const app = express ();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const messages = JSON.parse (fs.readFileSync("mensajes.txt",'utf-8'))
//  [
//     { author: "Juan", text: "¡Hola! ¿Que tal?" },
//     { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
//     { author: "Ana", text: "¡Genial!" }
// ];

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

const productos = new modulo.Contenedor('dataBase')

app.use(express.static('public'));
app.use('/api/productos', routerProductos);



httpServer.listen(3000, () => console.log('SERVER ON'))

io.on('connection', (socket) => {
    console.log('Usuario conectado')
    io.sockets.emit('productos', productos.getAll());
    socket.emit('messages', messages);
    // io.sockets.emit('mensajes', mensajesApi.getAll());
    socket.on('new-message',data => {
        messages.push(data);
        fs.writeFileSync("mensajes.txt" , JSON.stringify(messages))
        io.sockets.emit('messages', messages);
        });
    
    })
    
