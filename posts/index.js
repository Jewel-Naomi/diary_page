const express = require('express')

//express app
const app=express();

//building a server
const port = 4000;

app.listen(port,()=>{console.log('Listening at port 4000')})

console.log ('Backend programming')

//CRUD operations
//create, read, update, delete