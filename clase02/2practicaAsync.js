const fs = require('fs')

function escribirArchivo() {
    return new Promise(resolve=>{
        setTimeout(() => {
            fs.writeFile ("practica.txt","esto es una prueba", e=>
            e ? resolve('hubo un error'):resolve('todo ok'))
        }, 3000);
    })
}

function escribirMensaje(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("terminé")
        }, 1000);

    })
}
async function main(){
const escritura = await escribirArchivo()
const mensaje = await escribirMensaje()
console.log(escritura);
console.log(mensaje);
}
main ()