const array1 = [2,3,4]
const array2 = [{a:1,id:1},{a:1,id:2},{a:1,id:3},{a:1,id:4}]


indiceArray = array2.findIndex(elemento=>elemento.id===4);

console.log('el indice encontrado es ' + indiceArray);
