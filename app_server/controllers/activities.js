const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');
const Workout = mongoose.model('Workout');

const createActivity = function(req,res){
    Activity.create({
        time: new Date,
        workoutId: req.params.workoutId,
        userId: req.params.userId
    });
    res.redirect('/user/getAllActivity');            
};

const getAllActivity = function(req,res){
    Activity.find({}).exec(function(err, activity){
       
    });
    
        //,        function(err, activities){res.send(users);}
    //res.send(temp);
        
   // res.redirect('/users');
};

const sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports = {
    createActivity,
    getAllActivity
};

module.exports.getAllActivity = function(req, res){
    Activity.find().exec(function(err,activity){
        sendJsonResponse(res, 200, activity);
        res.render('activities', {activity: activity})
    });
};