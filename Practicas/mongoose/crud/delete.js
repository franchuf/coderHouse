require ('../conection')

const Producto = require ('../models/product')

const main = async () => {
    const borrar = await Producto.deleteOne({
        nombre: 'Raqueta Wilson'
    })
    console.log(borrar);
}
main()
    