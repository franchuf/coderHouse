const mongoose = require('mongoose')


const estudiantesSchema = new mongoose.Schema({
    nombre: { type: String, required: false },
    apellido: { type: String, required: false },
    edad: { type: Number, required: false },
    dni: { type: String, required: false, unique: false },
    curso: { type: String, required: false },
    nota: { type: Number, required: false},
   
})

const estudiantes= [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '337923460', curso: '3B', nota: 2 },]


mongoose.connect('mongodb://localhost/colegioDB') 
console.log('base conectada')
const EstudiantesDAO = mongoose.model('Estudiante',estudiantesSchema)

//const prueba = new EstudiantesDAO(estudiantes)


// EstudiantesDAO.insertMany (estudiantes,function (err){
//     if (err){console.log (err)
//     }else(console.log("todo bien vieja"))
// })
//prueba.save()



EstudiantesDAO.find(function(err,estudiantes){
    if (err){console.log (err)} 
    else {
    //    console.log(estudiantes)
    
    // mongoose.connection.close()
    // estudiantes.forEach(estudiante => {
    //     console.log(estudiante.nombre)
    // });
    }
})


// EstudiantesDAO.updateOne({_id: "61d7263ca0e584773c762003"} ,{nombre: "natalia"},(err)=>{
//     if (err){console.log(err);}
//     else{console.log("todo bien");}
// })