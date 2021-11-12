const express = require ("express");
const router = require("./router/webRoutes");
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const modulo = require ('./src/contenedor')

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const baseDeDatos = new modulo.Contenedor('baseDeDatos')

const app = express ();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
 ];


app.use(bodyParser.urlencoded({extended:true}))

// heandelbars-------------------------------------------------
app.engine(
    "hbs",
    handlebars({
        extname:".hbs",
        defaultLayout:"index",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
)
app.set("view engine",".hbs")
app.set("views","./views")
// heandelbars-------------------------------------------------

app.use(express.json())

app.use('/', router)


io.on('connection', (socket) => { //"connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Nuevo cliente conectado!') // Se imprimirá solo la primera vez que se ha abierto la conexión
    io.sockets.emit('productos', baseDeDatos.getAll())
    socket.emit('messages',messages)
    socket.on('new-message',data => {
        
        messages.push(data);
        io.sockets.emit('messages', messages);
    });

})





httpServer.listen(8081, () => console.log('SERVER ON'))

