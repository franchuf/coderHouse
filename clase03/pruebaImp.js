const fs = require ('fs')
const modulo = require ("../clase02/promesas")

const contenedor = new modulo.Contenedor ("productos")


contenedor.save( {
        title:"titulo cont1",
        price:"price cont1",
        thumbnail:"url cont1"
    })