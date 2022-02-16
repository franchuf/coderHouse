import express from 'express'
import  { data } from './nombres.js';
const app = express ();


app.get('/',(req,res)=>{
    res.json(data(1000))
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

