function inicio(){
    return 'start';
}


function loginUser(){
    return new Promise((res,rej)=>{
        
        setTimeout(() => {
            res('now we have the data');
            
        }, 2000);

    }) 
}

function fin() {
    return new Promise ((res,rej)=>{
        res('finalizado!')
    })

}
async function proceso(){
    const loginUser1 = await loginUser()
    const fn = await fin()
    console.log(loginUser1)
    console.log (fn)
}


console.log(inicio()); 
proceso()
fin()``