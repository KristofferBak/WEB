const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const workoutSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
});

const Workout = mongoose.model('Workout', workoutSchema);