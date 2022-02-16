//esquemas. Son las propiedades que van a tener los datos dentro de la base de datos
const {Schema, model} = require ('mongoose')

const productSchema = new Schema ({
    nombre: String ,    
    descripcion: String ,
    precio: Number,})

module.exports = model('Producto', productSchema)