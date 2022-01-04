const fs = require ('fs');
class Contenedor {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
    save(obj) {        
            let arrayDesdeArchivo= this.getAll()
            if (!arrayDesdeArchivo.length) {
                obj.id = 1
            }else {
                obj.id =  (arrayDesdeArchivo[arrayDesdeArchivo.length-1].id)+1
            }
            arrayDesdeArchivo.push(obj) // ahora agrega el objeto con el nuevo id al array
            const currentDate = new Date()
            const timestamp = currentDate.getTime()
            obj.timestamp = timestamp
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(arrayDesdeArchivo)) 
            return obj.id
        }
    getAll(){
        try {
            let nuevoArray = JSON.parse (fs.readFileSync("./" + this.nombreArchivo + ".txt",'utf-8'))
            return nuevoArray
        }catch (error){
            return[]
        }
        }
    getById(number) {
        let arrayDesdeArchivo = this.getAll()
        let indiceDelArray = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===number)
        return arrayDesdeArchivo[indiceDelArray]
        }
    modifyById(id,newTitle,newDescription,newCode,newThumbnail,newPrice,newStock) {
        let arrayDesdeArchivo = this.getAll()
        let indiceDelArray = arrayDesdeArchivo.findIndex((elemento)=>elemento.id==id);
        if (indiceDelArray===-1){
            console.log("el producto no existe");
        }else{
            arrayDesdeArchivo[indiceDelArray].title = newTitle;
            arrayDesdeArchivo[indiceDelArray].description = newDescription;
            arrayDesdeArchivo[indiceDelArray].code = newCode;
            arrayDesdeArchivo[indiceDelArray].url = newThumbnail;
            arrayDesdeArchivo[indiceDelArray].price = newPrice;
            arrayDesdeArchivo[indiceDelArray].stock = newStock;
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(arrayDesdeArchivo));
            return arrayDesdeArchivo[indiceDelArray];
        }
    }
    deleteById(number){
        let arrayDesdeArchivo = this.getAll()        
        let arrayFiltrado = arrayDesdeArchivo.filter(elemento=>{return elemento.id!==number})
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(arrayFiltrado))
        return arrayFiltrado
        }
        
    deleteAll(){
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , "")
        }
    }

module.exports.Contenedor = Contenedor;





//Para probar descomentar:
// const nuevoProducto = new Contenedor('baseDeDatos');
// nuevoProducto.save({})
//console.log(nuevoProducto.getById(3))
// console.log(nuevoProducto.save({a:1}));
//console.log(nuevoProducto.getAll())
//console.log(nuevoProducto.getById(1))

