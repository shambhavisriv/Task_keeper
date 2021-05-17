//import schema model
const Task = require('../models/task');

//Showing task keeper
module.exports.homie = (req , res) => {
    Task.find({}, (err, tasks) =>{
        if(err) { console.log("Error in finding tasks"); return; }

        res.render('home', {
            title : "Task Keeper",
            tasks : tasks
        });
    });
};
//create task
module.exports.create = (req , res) =>{
    Task.create({
        description : req.body.description,
        dueDate : req.body.date,
        category : req.body.category

    },(err,task) => {
        if(err){
            console.log(`tasks are not created ${err}`);
            return;
        }
        return res.redirect('back');

    } );
}
//delete single task
module.exports.delete = (req,res) =>{
    Task.findByIdAndDelete(req.params.id ,(err) =>{
        if(err){
            console.log(`error in finding id ${err}`);
            return;
        }
        return res.redirect('back');
        
    });
}

//delete multiple tasks

module.exports.deleteSelected = (req ,res) => {
    Task.deleteMany(
        {
            _id:{
                $in : req.body.task
            }
        },
        (err) => {
            if(err) {
                console.log('not found ',err);
                return;
            }
            return res.redirect('back');
        }
    );
}

