//import schema model
const tasks = require('../models/task');

//Showing task keeper
module.exports.homie = (req , res) => {
    tasks.find({}, (err, tasks) =>{
        if(err) { console.log("Error in finding tasks"); return; }

        res.render('home', {
            title : "Task Keeper",
            tasks : tasks
        });
    });
};

