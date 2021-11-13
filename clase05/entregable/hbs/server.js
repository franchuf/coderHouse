const express = require ("express");
const router = require("./router/webRoutes");
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")

const app = express ();
app.use(bodyParser.urlencoded({extended:true}))



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
app.use(express.json())


app.use('/', router)

const PORT = 8082
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

