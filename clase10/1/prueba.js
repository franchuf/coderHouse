const cities = [{Nombre: "ciudad del cabo"},{Nombre:"buenos aires"},{Nombre:"tokio"}]
const usuarios = [{Nombre:"juan"},{Nombre:"matias"},{nombre:"francisco"},{Nombre:"alberto"}]

function getUsuarios() {
   return new Promise ((resolved, rejected)=>{
      
      setTimeout(() => {
         resolved (usuarios)
      }, 2000);
   })
   
}
function getCities (){
   return new Promise ((resolved, rejected)=>{
      setTimeout(() => {
         resolved (cities)
      }, 1000);
   })
}



async function getInfo(){
   const users = await getUsuarios()
   const cities = await getCities()
   console.log (users)
   console.log (cities)
}
getInfo()

// const usersPromise = getUsuarios()
// usersPromise.then((users)=>{
//    console.log(users)
//    return getCities()
// }).then((cities)=>{
//    console.log(cities)
// })
