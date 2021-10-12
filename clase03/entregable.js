const express = require ("express");


app.get("/", function(req, res){
    console.log(req);
    res.send ("<h1>hello</h1>");

})


const app = express ();
app.listen (8080, function(){
    console.log("server running on port 8080")
})