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
            resolve (users); //resolve = return
        },3000)
    })
}
function getCities (){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(cities) //resolve =  return
        },1000)
    })
}


async function getInfo(){
    const users1 = await getUsers()
    const cities1= await getCities()
    console.log(users1)
    console.log(cities1)
};

getInfo()