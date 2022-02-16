require('../conection')

const Producto = require('../models/product')


async function main(){

    const findOne = await Producto.findOne({nombre:'Pc laptop'})
    return findOne
}


main()
    .then(cachitrulo=>console.log(cachitrulo))