// const mostrarLetras = (texto,callback)=> {
//     array = texto.split('')
//     let contador= 0
//     let temporizador =   setInterval (()=> {
//         console.log (array[contador])
//         contador ++
//         if (contador === array.length){
//             clearInterval(temporizador)
//         }
//     },300)
    
// }
// const fin = ()=>console.log('terminé')

// mostrarLetras("vamos CARAJO!!!!",fin())
const users = {
    name: "fran" ,
    lastname : "augusto"
}

const cities = {
    name: "calera" ,
    population : 20000
}

function getUsers() {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (users);
        },2000)
    })
}
function getCities (){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(cities)
        },1000)
    })
}


async function getInfo(){
    const users = await getUsers()
    const cities= await getCities()
    console.log(users)
    console.log(cities)
};

getInfo()