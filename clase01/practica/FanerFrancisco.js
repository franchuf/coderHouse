class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    conutMascotas(){
    //console.log(`la cantidad de mascotas es ${this.mascotas.length}`)
    return this.mascotas.length
    }
    addBook(titulo,autor){
        this.libros.push ({titulo:titulo,autor:autor})
    }
    getBookNames(){
        let arrayAutores = []
        for(let i = 0; i < this.libros.length;i++){
            arrayAutores.push(this.libros[i]["titulo"])
        }
        return arrayAutores
        }
    }

const user1 = new Usuario('francisco','faner')

console.log (user1.getFullName())
user1.addMascota('kika')
user1.addMascota('negrita')
user1.addMascota('canela')
console.log (user1.conutMascotas())
user1.addBook('El hijo del Miedo', 'Mauricio Macri')
user1.addBook('Otra vez sopa','Javier Milei')
user1.addBook('A falta de pan...','Vicky Xipolitakis',)
//console.log (user1)
console.log (user1.getBookNames())
