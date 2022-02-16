function primerSaludo() {
    return new Promise ((res,rej)=>{
        console.log('cargando saludo');
        setTimeout(() => {
            res('hola soy el primer saludo');
        }, 1000);
    })
}


function segundoSaludo() {
    return new Promise ((res,rej)=>{
        res('hola soy el segundo saludo');
    })
}

//const ss = segundoSaludo()

async function saludos(){
    const ps = await primerSaludo()
    const ss = await segundoSaludo()
    console.log(ps)
    console.log(ss);
    
}

saludos()
// ps
//     .then((a)=>{
        
//         console.log(`${a} la concha tuya`)
//         ss.then((b)=>{console.log(b);
        
//         });})


