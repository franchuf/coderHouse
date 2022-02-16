require('../conection')

const Producto = require ('../models/product')

async function main(){
    const productoX = new Producto({
        nombre: 'Raqueta Babolat',
        descripcion: 'Titanium S1',
        precio: 10000,
    })
    const salvar = await productoX.save()
    return productoX
}

main()
    .then((cachitrulo)=>console.log(`el producto a continuacion ha sido guardado ${cachitrulo}`))
    .catch(e=>console.log(e))