const fs = require ('fs');
class Contenedor2 {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
    save(obj) {
        
        let arrayDesdeArchivo = this.getAllCarritos(); //lo lee, lo parsea y lo mete adentro de la variable arrayDesdeArchivo
        if (!arrayDesdeArchivo.length){
            obj.id = 1
        }else {
            obj.id =  (arrayDesdeArchivo[arrayDesdeArchivo.length-1].id)+1 //al objeto nuevo le agrega el ultimo + 1
        }
        obj.productos = []
        const currentDate = new Date()
        const timestamp = currentDate.getTime()
        obj.timestamp = timestamp
        arrayDesdeArchivo.push(obj) // ahora agrega el objeto con el nuevo id al array
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(arrayDesdeArchivo))  //lo stringifica y lo escribe en el archivo con el nombre que se parametrizó
        return obj.id
        }

        //post('/:id_carrito/productos/:id_producto') 
    addByIdProducto(idCarrito,idProducto){
        let admin = true
        if (admin==false){
            return "no tiene privilegios"
        } 
        let nuevoArrayCarritos = this.getAllCarritos()
        let nuevoArrayProductos = this.getAllProductos()
        let indiceDelArrayCarritos = nuevoArrayCarritos.findIndex((elemento)=>elemento.id===idCarrito)
        let indiceDelArrayProductos = nuevoArrayProductos.findIndex((elemento)=>elemento.id===idProducto)
        if (indiceDelArrayCarritos!==-1&&indiceDelArrayProductos!==-1){
            nuevoArrayCarritos[indiceDelArrayCarritos].productos.push(nuevoArrayProductos[indiceDelArrayProductos])
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(nuevoArrayCarritos))
            return nuevoArrayCarritos
        }else if (indiceDelArrayCarritos===-1){
            return "el carrito no existe"
        }else if (indiceDelArrayProductos===-1){
            return "el producto no existe"
        }
    }
    deleteProductoById(idCarrito,idProducto){
        let admin = false
        if (admin==false){
            return {error:"no tiene privilegios"}
        }
        let arrayDesdeArchivo = this.getAllCarritos()
        let indiceDelArrayCarritos = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===idCarrito)
        console.log (arrayDesdeArchivo)
        console.log(indiceDelArrayCarritos)
        if (indiceDelArrayCarritos==-1){
            return "el carrito no existe"
        }
        let arrayDeProductos = arrayDesdeArchivo[indiceDelArrayCarritos].productos
        let indiceDelArrayProductos = arrayDeProductos.findIndex((elemento)=>elemento.id==idProducto);
        if (indiceDelArrayProductos==-1){
            return "el producto no existe"
        } 
        arrayDeProductos.splice(indiceDelArrayProductos,1)
        arrayDesdeArchivo[indiceDelArrayCarritos].productos = arrayDeProductos
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(arrayDesdeArchivo))
        return arrayDesdeArchivo
        
    }
    getByIdCarrito(number){
        let arrayDesdeArchivo = this.getAllCarritos()
        let indiceDelArray = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===number)
        if (indiceDelArray!==-1){
            return arrayDesdeArchivo[indiceDelArray].productos
        }else {
            return "no existe el carrito"
        }
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
        try{
            let arrayDesdeArchivo = JSON.parse(fs.readFileSync("./" + this.nombreArchivo + ".txt", 'utf-8'));
            return arrayDesdeArchivo;
        }
        catch (err){
            return []
        }
    }
    deleteCarritoById(idCarrito){ // delete   /api/carrito/:id 
        let admin = true
        if (admin==false){
            return "no tiene privilegios"
        }
        
        let arrayDesdeArchivo = this.getAllCarritos()
        let indiceDelArrayCarritos = arrayDesdeArchivo.findIndex((elemento)=>elemento.id===idCarrito)
        if (indiceDelArrayCarritos!==-1){
            arrayDesdeArchivo.splice(indiceDelArrayCarritos,1)
        }else{return "el carrito no existe";}

        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(arrayDesdeArchivo))
        return arrayDesdeArchivo

    }

}

//const carritos = new Contenedor2('carritoDB')
//console.log (carritos.getAllCarritos())
//carritos.deleteProductoById(1,3)
// carritos.save({"productos":[]})
// console.log(carritos.addByIdProducto(1,3))

module.exports.Contenedor2 = Contenedor2;