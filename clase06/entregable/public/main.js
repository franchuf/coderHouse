const socket = io();
socket.on('mi mensaje',data=>{
    alert(data)
})
socket.on('spam',msg=>{
    console.log(msg)
    document.getElementById('texto').innerHTML = 'llegó un mensaje'
})
