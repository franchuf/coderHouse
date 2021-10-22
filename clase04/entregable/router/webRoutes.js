const express = require ('express');
const router = express.Router();


const array =[{
    id: 1   ,
    producto1:"regla",
    price: 200,
    thumbnail: "url"
},{
    id: 2,
    producto1:"compas",
    price: 300,
    thumbnail: "url"
}]
//-> devuelve todos los productos.
router.get("/",(req,res)=>{
    console.log(__dirname)
    res.sendFile ("/home/francho/coderHouse/clase04/entregable/public/index.html")
})
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
    res.json (array)
    let encontrado = array.find(function (element) {element.id===1})
    res.json(encontrado) //no encuentra nada
    
})
// elimina un producto según su id.  
router.delete ("/", (req,res)=>{
    let id = req.params
    array.forEach(element => {
        if (element === id){
            array.splice(id+1,1)
        }else {
            res.json({ error : 'producto no encontrado' })
        }
    });
})
module.exports = router;