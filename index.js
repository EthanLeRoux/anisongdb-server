const express = require('express');
const app = express();
const port = process.env.PORT || 9090;
const songRoutes = require('./routes/songroutes');

app.listen(port,(error)=>{
    if(!error){
        console.log('Listening on port 9090')
    }
    else{
        console.log('Error, server coudlnt start: ' + error.toString())
    }
})

app.use('/songs', songRoutes);