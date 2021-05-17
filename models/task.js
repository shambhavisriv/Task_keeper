const mongoose = require('mongoose');

//create schema 
const taskSchema = new mongoose.Schema({
    description :{
        type : String,
        required : true

    },
    dueDate :{
        type : Date,
        required : true
    },
    
    category :{
        type : String,
        required : true
    }


});

//create model 
const Task = mongoose.model("Task" ,taskSchema)
 
module.exports = Task;
