const mongoose = require('mongoose');
const User = mongoose.model('User');
const Workout = mongoose.model('Workout');

const getUserId = function(req, res) {
    User.findById(req.params.userId)
        .populate('workouts')
        .exec((err, user) => {
            res.render("workouts", {
                title: 'Workouts',
                workouts: user.workouts,
                userId: req.params.userId
            });
        });
};

const createWorkout = function(req, res) {
    Workout.create({
        name: req.body.name,
        description: req.body.description
    }, (err, workout) => {
        User.findByIdAndUpdate(
            req.params.userId,
            {$push: {workouts: workout}},
            {new: true},
            function(err, user) {
                res.redirect('/user/' + req.params.userId + '/workouts');
            }
        );
    });
};

module.exports = {
    getUserId,
    createWorkout
};
