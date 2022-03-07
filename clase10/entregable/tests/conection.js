import mongoose from 'mongoose'

const uri = 'mongodb://127.0.01:27017/test1'

mongoose.connect (uri)

mongoose.connection.on('open', _ =>{
  console.log('conexion establecida al servidor, direccion: ', uri) ;})


