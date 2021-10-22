const express = require ('express');
const router = express.Router();


const array =[{
    id: 1   ,
    title:"regla",
    price: 200,
    thumbnail: "url"
},{
    id: 2,
    title:"compas",
    price: 300,
    thumbnail: "url"
}]
//-> devuelve todos los productos.

//devuelve un producto según su id.
router.get("/:id",(req,res)=>{
    res.json(array[req.params.id - 1])
})
//recibe y agrega un producto, y lo devuelve con su id asignado
router.post("/",(req,res)=>{
    let nuevoId = array.length + 1 //crea el id que corresponde
    let {title,price,thumbnail} = req.body
    let nuevoObj = req.body // toma el objeto ingresado por el cliente y lo mete en nuevoObj
    nuevoObj.id = nuevoId //le agrega la llave id con el valor que corresponde
    array.push(nuevoObj) // pushea el objeto a la base de datos
   // res.json(nuevoObj) //devuelve el objeto con la id nueva
    res.json(array)
})
// recibe y actualiza un producto según su id.
router.put("/:id",(req,res)=>{
    //let encontrado = array.filter((element)=>element.id == 2)
    array[req.params.id].title = req.body.title
    array[req.params.id].price = req.body.price
    array[req.params.id].thumbnail = req.body.thumbnail
    res.json(array)
})
// elimina un producto según su id.
router.delete ("/:id", (req,res)=>{
    // array.forEach(function(producto,index,objeto){
    //     if(producto.id === req.params.id){
    //         objeto.splice(index,1)
    //     }
    // })
    // res.json (array)
// let borrar = array.filter((element)=>element.id == 2)
let array = array.filter (producto=>producto.id !==req.params.id)
   res.json(array)
})
module.exports = router;