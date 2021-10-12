
//PRIMER RETO NO ENTREGABLE

// function mostrarLista(lista){
//     if (lista.length === 0){
//         console.log (`lista vacía`);
//     }
//     else {
//         console.log(lista);
//     }
// }
// mostrarLista([0])
// mostrarLista([])

//Funcion que haga lo mismo que la anterior pero IIFE

// (function(lista){
//     lista = [];
//     if (lista.length === 0){
//         console.log ('lista vacia');
//     }
//     else {
//         console.log(lista);
//     }
// })();

// function crearMultiplicador(num1) {
//     return function(num2){
//         return num1*num2
//     }
// };
// // const duplicar = crearMultiplicador(2)
// // console.log(duplicar(3))
// const triplicar = crearMultiplicador (3)
// console.log(triplicar(4))



// class Contador {
//     constructor (nombre){
//         this.nombre = nombre
//         this.cuenta=0
//     }
//     obtenerResponsable(){
//         console.log(this.nombre)
//     }
//     static contador=0
//     obtenerCuentaIndividual(){
//         console.log(this.cuenta)
//     }
//     obtenerCuentaGlobal(){
//         console.log(contador)
//     }contar(){
//         this.cuenta++
//         contador++
//     }
// }
// const francisco = new Contador("francisco")
// console.log(francisco)