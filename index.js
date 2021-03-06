//import express
const express = require('express');
const app = express();

//allocating port  to server
const port = 8000;

//using body-parser for parsing form data
app.use(express.urlencoded({extended:true}));

// use express router
app.use('/', require('./routes'));


//setting template engine
app.set('view engine','ejs');
app.set('views','./view');


//database connection
const db = require('./config/mongoose');

//static files
app.use(express.static('assets'));

app.listen(port ,err => {
    if(err){
        console.log(`Throwing error ${err}`);
        return;
    }
    console.log(`Server is successfully running on port : ${port}`);
});

