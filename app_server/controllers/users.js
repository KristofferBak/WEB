const mongoose = require('mongoose');
const User = mongoose.model('User');

const getAllUsers = function(req, res) {
    User.find({})
        .exec((err, users) => {
            res.render('users', {
                title: 'Users',
                users: users
            });
        });
};

const getUser = function(req,res){
    User.findById(req.params.id)
        .exec(function(err, user){
            res.render('users', {
                user: user
            });
        });
}

const createUser = function(req, res) {
    User.create({
        name: req.body.name
        }, (err, user) => {
            res.redirect('/users');
        });
};

module.exports = {
    getAllUsers,
    createUser,
    getUser
};
