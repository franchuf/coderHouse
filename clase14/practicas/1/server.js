const config = require('../1/config.js')
const express = require('express')

const app = express()

console.log(`NODE_ENV = ${config.NODE_ENV}`)

app.get('/',(req,res)=>{
console.log('hello word');
})



app.listen (config.PORT,config.HOST,function(){
    console.log(`App listening http://${config.HOST}:${config.PORT}`);
})
 