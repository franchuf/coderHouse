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
// router.get("/",(req,res)=>{
//    res.sendFile(process.cwd() + "/public/index.html")

// })


router.get("/productos",(req,res)=>{
    res.render('index',{array})
})
//recibe y agrega un producto, y lo devuelve con su id asignado
router.post("/api/productos",(req,res)=>{
    let nuevoId = array.length + 1 //crea el id que corresponde
    let {title,price,thumbnail} = req.body
    let nuevoObj = req.body // toma el objeto ingresado por el cliente y lo mete en nuevoObj
    nuevoObj.id = nuevoId //le agrega la llave id con el valor que corresponde
    array.push(nuevoObj) // pushea el objeto a la base de datos
   // res.json(nuevoObj) //devuelve el objeto con la id nueva
    console.log(array)
    res.redirect('/')
})
// recibe y actualiza un producto según su id.
router.put("/:id",(req,res)=>{
    if(req.params.id<=array.length){
        array[req.params.id-1].title = req.body.title
        array[req.params.id-1].price = req.body.price
        array[req.params.id-1].thumbnail = req.body.thumbnail
        res.json(array)
    }else{
        res.json({ error : 'producto no encontrado' })
    }

})
// elimina un producto según su id.
router.delete ("/:id", (req,res)=>{
    if (req.params.id<=array.length){
        let borrar = array.findIndex(element=>element.id==req.params.id)
        array.splice(borrar,1)
        res.json(array)
    }else{
        res.json({ error : 'producto no encontrado' })
    }

})
module.exports = router;