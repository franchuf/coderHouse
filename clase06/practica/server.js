const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.get('/spam', (req,res)=>{
    io.sockets.emit('spam', 'soy un spam')
    res.end()
})

io.on('connection', (socket) => {

    console.log('Usuario conectado')
    socket.emit("mi mensaje",'este es un mensaje del servidor')


})
httpServer.listen(8080, () => console.log('SERVER ON'))