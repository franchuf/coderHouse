const nombres = ['Mariano', 'Francisco','Fernando','Adrian','Lorenzo','Roberto','Santiago']
const apellidos = ['Fernandez', 'Capelli','Faner','Gonzalez','Carrion','Tarabay']
const nombreYapellido = []


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function personasRandom() {
    const randomNumber1 = getRandomInt(nombres.length)
    const randomNumber2 = getRandomInt(apellidos.length)
    const nombrePersona = nombres[randomNumber1]
    const apellidosPersona = apellidos[randomNumber2]
    const persona = `${nombrePersona} ${apellidosPersona}`
    return persona
}

export const data = await function push(cant) {
    for (let index = 0; index < cant; index++) {
        nombreYapellido.push (personasRandom())
        }
    return nombreYapellido
    
    }



