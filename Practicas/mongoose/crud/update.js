require ('../conection')

const Producto = require ('../models/product')

const main = async () => {
    const renovar = await Producto.updateOne({
        nombre: 'Raqueta Rosignoll'
    },
     {  nombre: 'Raqueta Prince'
    })
    return renovar
}
main()
    .then((cachitrulo)=>console.log(`el articulo modificado:${cachitrulo}`))
    .catch(e=>console.log(e))
