const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const songRoutes = require('./routes/songroutes');
app.listen(port,(error)=>{
    if(!error){
        console.log('Listening on port 9090')
    }
    else{
        console.log('Error, server coudlnt start: ' + error.toString())
    }
})

app.use(express.json());
app.use('/songs', songRoutes);