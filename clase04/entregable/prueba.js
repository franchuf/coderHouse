const array =[{
    id: 1   ,
    producto1:"regla",
    price: 200,
    thumbnail: "url"
},{
    id: 2,
    producto1:"compas",
    price: 300,
    thumbnail: "url"
}]

let encontrado = array.filter((element)=>element.id ==2);
console.log(encontrado);