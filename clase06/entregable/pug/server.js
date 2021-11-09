const express = require ("express");
const router = require("./router/webRoutes");
const bodyParser = require("body-parser")

const app = express ();
app.use(bodyParser.urlencoded({extended:true}))

app.set('views', './views' )
app.set("view engine","pug")

app.use(express.json())

app.get('/',)
app.use('/', router)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

