const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');
const Workout = mongoose.model('Workout');

const createActivity = function(req,res){
    Activity.create({
        time: new Date
    }, (err, Activity) => {
        Workout.findByIdAndUpdate(
            req.params.workoutId,
            {$push: {exercises: Activity}},
            {new: true},
            (err, workout) => {
                res.redirect('/user/' + req.params.userId + '/workout/' + req.params.workoutId + '/exercises/' ); //+ req.params.exerciseId  +'/createActivity'
            }
        )
    } );        
};

const getAllActivity = function(req,res){
    Activity.find({}, function(err, activities){
        res.send(users);
    });
};

module.exports = {
    createActivity,
    getAllActivity
};