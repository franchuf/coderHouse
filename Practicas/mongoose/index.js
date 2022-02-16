require  ('./conection')


const ProductosDAO = require ('./models/product')

async function main(){
    const producto1 = new ProductosDAO ({
        nombre: 'Pc laptop',    
        descripcion: 'Laptop ThinkPad' ,
        precio: 300000,
    })
    
    const productSaved = await producto1.save()
    return productSaved
}


main()
    .then(()=>{console.log('se guardo su producto todo ok');})
    .catch((err)=>{console.log(('ha ocurrido un error:',err));})