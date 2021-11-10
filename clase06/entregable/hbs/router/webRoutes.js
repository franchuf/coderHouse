const express = require ('express');
const router = express.Router();
const modulo = require ('../src/contenedor')

const baseDeDatos = new modulo.Contenedor('baseDeDatos')

//baseDeDatos.save({a:1})
const todo = []
router.get("/",(req,res)=>{
    res.sendFile(process.cwd() + "/public/index.html")
})

router.post('/api/productos',(req,res)=>{
    baseDeDatos.save(req.body)

    res.redirect('/')
})

router.get('/productos',(req,res)=>{
    todo = baseDeDatos.getAll()
    res.json(todo)
})




module.exports = router;
