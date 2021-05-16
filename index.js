//import express
const express = require('express');
const app = express();

const port = 8000;

app.listen(port ,err => {
    if(err){
        console.log(`Throwing error ${err}`);
        return;
    }
    console.log(`Server is successfully running on port : ${port}`);


});

