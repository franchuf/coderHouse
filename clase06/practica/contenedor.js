const fs = require ('fs');
class Contenedor {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
    save(obj) {
        try {
            fs.accessSync(__dirname + "/" + this.nombreArchivo + ".txt"); //verifica si existe o no el archivo
            //en caso de que exista...
            let arrayDesdeArchivo = this.getAll(); //lo lee, lo parsea y lo mete adentro de la variable arrayDesdeArchivo
            obj.id =  (arrayDesdeArchivo[arrayDesdeArchivo.length-1].id)+1 //al objeto nuevo le agrega el id que será igual al largo del array + 1
            arrayDesdeArchivo.push(obj) // ahora agrega el objeto con el nuevo id al array
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(arrayDesdeArchivo))  //lo stringifica y lo escribe en el archivo con el nombre que se parametrizó
            return obj.id
        } catch (err) {
            //si el archivo no existe...
            obj.id = 1 // primero le crea un id y se lo inserta al objeto
            let nuevoArray = [] //crea un arreglo
            nuevoArray.push(obj); // inserta el objeto en el arreglo creado
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(nuevoArray)); //lo stringifica y lo escribe en el archivo que se parametrizó
            return obj.id
        }
        }
    getAll(){
        let nuevoArray = JSON.parse (fs.readFileSync("./" + this.nombreArchivo + ".txt",'utf-8'))
        return nuevoArray
        }
    getById(number) {
        let arrayDesdeArchivo = this.getAll()
        let indiceDelArray = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===number)    
        return arrayDesdeArchivo[indiceDelArray]
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
//const nuevoProducto = new Contenedor('baseDeDatos');
//console.log(nuevoProducto.save({a:1}));
//console.log(nuevoProducto.getAll())
//console.log(nuevoProducto.getById(1))

