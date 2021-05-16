//import mongoose 
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/task_db',{useNewUrlParser:true , useUnifiedTopology:true,});

//access the database
const db = mongoose.connection;

//error handeling
db.on("error" , console.error.bind("Error in connecting the database"));

//on successfull connection
db.once("open", () =>{
    console.log("Successfully connected to database");
});