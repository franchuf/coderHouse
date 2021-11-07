const express = require ("express");
const routerMascotas = require('./routerMascotas.js')

const app = express ();

app.use(express.json())



app.use('/api/mascotas', routerMascotas)
 
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))