const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)



app.use(express.static('./public'))
app.get('/', (req, res) => { // Esta ruta carga nuestro archivo index.html en la raíz de la misma
    res.sendFile('./index.html', {root: __dirname})
})

httpServer.listen(3000, () => console.log('SERVER ON')) // El servidor funcionando en el puerto 3000

io.on('connection', (socket) => { //"connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Nuevo cliente conectado!') // Se imprimirá solo la primera vez que se ha abierto la conexión 
    socket.emit('mi mensaje','este es un mensaje del servidor')
})

