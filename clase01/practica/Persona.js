class Persona {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad

    }static saludo = 'ya wey'
}

const persona = new Persona (`francisco`,12)

console.log(persona)
console.log (Persona.saludo);