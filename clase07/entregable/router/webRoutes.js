const express = require ('express');
const router = express.Router();
const modulo = require ('../src/contenedor')
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended:true}))
router.use(express.json())

const productos = new modulo.Contenedor('dataBase')
router.get('/', (req,res)=>{
    res.json(productos.getAll())
})
router.get('/:id',(req,res)=>{
    if (Object.entries(req.query).length > 0){
        res.json({
            result:'get with query params: ok',
            query:req.query
        })
    }else {
    res.json(productos.getById(Number(req.params.id)))
    }
})

router.post('/', (req, res)=>{
    productos.save(req.body)
    res.redirect('/')
})
router.put('/:id',(req,res)=>{
    res.json(productos.modifyById(req.params.id, req.body.title, req.body.price, req.body.thumbnail))
    
})
router.delete('/:id',(req,res)=>{
    res.json (productos.deleteById(Number(req.params.id)))
    
})





module.exports = router;