const array = []

function cuadrado(a){
    
    for (let i=0;i<1000;i++){
        array.push(i*i)
    }
    console.log(array);
}


cuadrado(10)