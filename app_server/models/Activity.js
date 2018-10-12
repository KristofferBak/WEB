const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const activitySchema = Schema({ 
    time: {
        type: Date, default: Date.now,
        required: true
    },
    workout: {
        type: Schema.Types.ObjectId,
        ref: 'Workout',
        required: true
    }  
});

const Activity = mongoose.model('Activity', activitySchema);