const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const exerciseSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    set: {
        type: Number,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);