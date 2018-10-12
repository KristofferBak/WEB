const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;


const userSchema = Schema({

    email:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },    
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }],
    
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash; //returns true or false, depending on whether the hashes match
};

userSchema.methods.generateJwt = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this. _id,
        email: this.email,
        name: this.name,
       // workouts: new workouts(),
        exp: parseInt(expiry.getTime() / 1000),},
         process.env.JWT_SECRET);    
};

const User = mongoose.model('User', userSchema);