import fs from 'fs';
//import ProductosDAO from '../DAOS/ProductosDAO.js'

export default class ContenedorProductos {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
    save(obj) {
        try {
            fs.accessSync("./" + this.nombreArchivo + ".txt"); //verifica si existe o no el archivo
            //en caso de que exista...
            let arrayDesdeArchivo = this.getAll(); //lo lee, lo parsea y lo mete adentro de la variable arrayDesdeArchivo
            obj.id =  (arrayDesdeArchivo[arrayDesdeArchivo.length-1].id)+1 //al objeto nuevo le agrega el ultimo + 1
            console.log(obj)
            const currentDate = new Date()
            const timestamp = currentDate.getTime()
            obj.timestamp = timestamp
            arrayDesdeArchivo.push(obj) // ahora agrega el objeto con el nuevo id al array
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(arrayDesdeArchivo))  //lo stringifica y lo escribe en el archivo con el nombre que se parametriz√≥
            return obj.id
        } catch (err) {
            //si el archivo no existe...
            obj.id = 1 // primero le crea un id y se lo inserta al objeto
            const currentDate = new Date()
            const timestamp = currentDate.getTime()
            obj.timestamp = timestamp
            let nuevoArray = [] //crea un arreglo
            nuevoArray.push(obj); // inserta el objeto en el arreglo creado
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(nuevoArray)); //lo stringifica y lo escribe en el archivo que se parametriz√≥
            return obj.id
        }
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
        arrayDesdeArchivo[indiceDelArray].title = newTitle;
        arrayDesdeArchivo[indiceDelArray].description = newDescription;
        arrayDesdeArchivo[indiceDelArray].code = newCode;
        arrayDesdeArchivo[indiceDelArray].url = newThumbnail;
        arrayDesdeArchivo[indiceDelArray].price = newPrice;
        arrayDesdeArchivo[indiceDelArray].stock = newStock;
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(arrayDesdeArchivo));
        return arrayDesdeArchivo[indiceDelArray];
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





//Para probar descomentar:
// const nuevoProducto = new Contenedor('baseDeDatos');
// nuevoProducto.save({})
//console.log(nuevoProducto.getById(3))
// console.log(nuevoProducto.save({a:1}));
//console.log(nuevoProducto.getAll())
//console.log(nuevoProducto.getById(1))

