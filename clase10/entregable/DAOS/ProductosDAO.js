import mongoose from 'mongoose'

const productosSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
})

const productos = [
    {title: 'compas',description:'compas de plastico',code:'101',url:'/compas/',price:100,stock:10},
    {title: 'regla',description:'de 20 cm',code:'102',url:'/regla/',price:200,stock:20 }
]

const ProductosDAO = mongoose.model('productos',productosSchema) //crea el modelo, como si fuera la clase. EL primer parametro es el nombre de la collection, y el segundo parametro es el schema.

mongoose.connect('mongodb://localhost/ecommerceDB')

console.log("cliente conectado");

//metodo para insertar productos
// for(const producto of productos){ //metodo dos
//     await ProductosDAO.create(producto)
    
// }


export default ProductosDAO;