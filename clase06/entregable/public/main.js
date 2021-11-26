const socket = io()
socket.on('productos', data => {
    console.log(data);
    document.getElementById('productos').innerHTML =  JSON.stringify (data)
    
});
socket.on('mensajes', (data) => {
    console.log(data);
})


function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
            <strong style="color:blue">${elem.author}</strong> <a style="color:brown">${elem.fyh}</a>:
            <em style="color:green">${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
    const fyh = new Date().toLocaleString()
    const mensaje = {
        author: document.getElementById('username').value,
        fyh: fyh,
        text: document.getElementById('texto').value
    };
    if (mensaje.author){
        socket.emit('new-message', mensaje);
        return false;

    }else {alert("si no ingresas tu mail, no puedo hacer nada por ti")}
}


