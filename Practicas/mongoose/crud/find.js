require ('../conection')
const producto =  require ('../models/product')

async function find (){
    const busqueda = await producto.find()
    return busqueda
}


find()
    .then((cachitrilo)=>console.log(cachitrilo))
    .catch(e=>console.log(e))
