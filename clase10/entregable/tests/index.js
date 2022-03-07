import mongoose from 'mongoose'
import './conection.js'
import { productosSchema } from '../DAOS/models.js'


const ProductosDAO = mongoose.model('productos',productosSchema)

const producto1 = await new ProductosDAO ({
    title: 'pc computer',
    description: 'laptop',
    code: 'un codigo string',
    url: 'una direccion2',
    price: 25000,
    stock: 10,
})


producto1.save ()
console.log(producto1);

