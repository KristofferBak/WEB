const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Exercise = mongoose.model('Exercise');

const getWorkoutId = function(req, res) {
    Workout.findById(req.params.workoutId)
        .populate('exercises')
        .exec((err, workout) => {
            res.render("exercises", {
                title: 'Exercises',
                exercises: workout.exercises,
                userId: req.params.userId,
                workoutId: req.params.workoutId
            });
        });
};

const createExercise = function(req, res) {
    Exercise.create({
        name: req.body.name,
        description: req.body.description,
        set: req.body.set,
        reps: req.body.reps
    }, (err, exercise) => {
        Workout.findByIdAndUpdate(
            req.params.workoutId,
            {$push: {exercises: exercise}},
            {new: true},
            (err, workout) => {
                res.redirect('/user/' + req.params.userId + '/workout/' + req.params.workoutId + '/exercises');
            }
        );
    });
};

module.exports = {
    getWorkoutId,
    createExercise
};
