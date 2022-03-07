import mongoose from 'mongoose'
import { productosSchema } from './models.js'

const ProductosDAO = mongoose.model('productos',productosSchema) //crea el modelo, como si fuera la clase. EL primer parametro es el nombre de la collection, y el segundo parametro es el schema.

const uri = 'mongodb://localhost:27017/ecommerceDB'
mongoose.connect(uri)
mongoose.connection.on('open', _ =>{
    console.log('Database conected to ', uri);
})




//metodo para insertar productos
// for(const producto of productos){ //metodo dos
//     await ProductosDAO.create(producto)
    
// }


export default ProductosDAO;