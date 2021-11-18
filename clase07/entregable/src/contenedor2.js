const fs = require ('fs');
class Contenedor2 {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
    save(obj) {
        try {
            fs.accessSync("./" + this.nombreArchivo + ".txt"); //verifica si existe o no el archivo
            //en caso de que exista...
            let arrayDesdeArchivo = this.getAllCarritos(); //lo lee, lo parsea y lo mete adentro de la variable arrayDesdeArchivo
            obj.id =  (arrayDesdeArchivo[arrayDesdeArchivo.length-1].id)+1 //al objeto nuevo le agrega el ultimo + 1
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
    addByIdProducto(idCarrito,idProducto){
        let nuevoArrayCarritos = this.getAllCarritos()
        let nuevoArrayProductos = this.getAllProductos()
        let indiceDelArrayCarritos = nuevoArrayCarritos.findIndex((elemento)=>elemento.id===idCarrito)
        let indiceDelArrayProductos = nuevoArrayProductos.findIndex((elemento)=>elemento.id===idProducto)
        nuevoArrayCarritos[indiceDelArrayCarritos].productos.push(nuevoArrayProductos[indiceDelArrayProductos])
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(nuevoArrayCarritos))
        return nuevoArrayCarritos
    }
    getByIdCarrito(number){
        let arrayDesdeArchivo = this.getAllCarritos()
        let indiceDelArray = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===number)
        return arrayDesdeArchivo[indiceDelArray]
    }
    getByIdProducto(number) {
        let arrayDesdeArchivo = this.getAllProductos()
        let indiceDelArray = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===number)
        return arrayDesdeArchivo[indiceDelArray]
        }
    getAllProductos(){
        let nuevoArray = JSON.parse (fs.readFileSync("./dataBase.txt",'utf-8'))
        return nuevoArray
    }
    getAllCarritos(){
        let nuevoArray = JSON.parse (fs.readFileSync("./" + this.nombreArchivo + ".txt"))
        return nuevoArray
    }


}

// const carritos = new Contenedor2('carritoDB')

// console.log(carritos.addByIdProducto(7,2))

module.exports.Contenedor2 = Contenedor2;