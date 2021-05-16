//import express
const express = require('express');
const app = express();

//allocating port  to server
const port = 8000;

//database connection
const db = require('./config/mongoose');



app.listen(port ,err => {
    if(err){
        console.log(`Throwing error ${err}`);
        return;
    }
    console.log(`Server is successfully running on port : ${port}`);
});

