// const modulo = require ('./src/promesas')
// import modulo from './src/promesas'
const modulo2 = require ('./hola')
//import saludo from './hola.js'

// const prueba = new modulo.Contenedor('prueba')

//prueba.save({a:1})

console.log(modulo2);
console.log(modulo2.nombreConElQueSeExportaLaFuncion);
console.log (modulo2.nombreConElQueSeExportaLaFuncion())

//console.log(saludo)