const express = require ("express");
const app = express ();

app.get("/api/sumar/:num1/:num2", function(req, res){
    num1 = parseInt(req.params.num1)
    num2 = parseInt(req.params.num2)
    res.json({ suma: Number(num1) + Number(num2) })
})

app.get('/api/sumar', (req, res) => {
    const { num1, num2 } = req.query
    console.log({ suma: Number(num1) + Number(num2) })

})
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

