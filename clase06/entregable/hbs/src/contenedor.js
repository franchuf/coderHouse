const fs = require ('fs');
class Contenedor {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
    save(obj) {
        try {
            fs.accessSync(__dirname + "/" + this.nombreArchivo + ".txt"); //verifica si existe o no el archivo
            //en caso de que exista...
            let completoObj = this.getAll(); //lo lee, lo parsea y lo mete adentro de la variable completoObj
            obj.id = completoObj.length + 1 //al objeto nuevo le agrega el id que será igual al largo del array + 1
            completoObj.push(obj) // ahora le agrega el objeto al array
            fs.writeFileSync("./" + this.nombreArchivo + ".txt" ,JSON.stringify(completoObj))  //lo stringifica y lo escribe en el archivo con el nombre que se parametrizó
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
        let arregloCompleto = this.getAll()
            return arregloCompleto[number-1]
        }
        deleteById(number){
        let arregloCompleto = this.getAll()
        arregloCompleto.forEach(element => {
            if (number === element.id){
            arregloCompleto.splice(number-1,1)
            }
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , JSON.stringify(arregloCompleto))
            });
        }
    deleteAll(){
        fs.writeFileSync("./" + this.nombreArchivo + ".txt" , "")
        }
    }

module.exports.Contenedor = Contenedor;