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
const tasks = mongoose.model("tasks" ,taskSchema)

module.exports = tasks;
