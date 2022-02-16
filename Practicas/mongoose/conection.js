const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/localVentas'
mongoose.connect(uri);

mongoose.connection.on('open',_=>{
    console.log('database conectede to ' , uri);
})



mongoose.connection.on('error',err=>{
    console.log(err);
})


// const mongoose = require('mongoose')

// const uri = 'mongodb://127.0.0.1:27017/prueba'

// mongoose.connect(uri,{
//     usenewUrlParser: true,
//     useUnifiedTopology: true,
// })


