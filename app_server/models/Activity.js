const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const activitySchema = Schema({ 
    time: {
        type: Date, default: Date.now,
        required: true
    },
    workoutId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }   
});

const Activity = mongoose.model('Activity', activitySchema, 'activities');