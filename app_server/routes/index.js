const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
<<<<<<< HEAD

=======
>>>>>>> d4ce983d778b96210f7f8cc0da6868304a355039
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

const ctrlExercises = require('../controllers/exercises');
const ctrlUsers = require('../controllers/users');
const ctrlWorkouts = require('../controllers/workouts');
const ctrlAuth = require('../controllers/authentication');

router.get('/', ctrlUsers.getAllUsers);
router.get('/users', ctrlUsers.getAllUsers);
<<<<<<< HEAD
//router.get('/users/:id', ctrlUsers.getUser);
=======
router.get('/users/:id', ctrlUsers.getUser);
>>>>>>> d4ce983d778b96210f7f8cc0da6868304a355039
router.post('/users/createUser', ctrlUsers.createUser);

router.get('/user/:userId/workouts', ctrlWorkouts.getUserId);
router.post('/user/:userId/workouts/createWorkout', ctrlWorkouts.createWorkout);

router.get('/user/:userId/workout/:workoutId/exercises', ctrlExercises.getWorkoutId);
router.post('/user/:userId/workout/:workoutId/exercises/createExercise', ctrlExercises.createExercise);

<<<<<<< HEAD
//endpoint til login og register
router.post('/register', ctrlAuth.register);    
router.post('/login', ctrlAuth.login);
=======
router.post('/register', ctrlAuth.register);
router.post('login', auth, ctrlAuth.login);
>>>>>>> d4ce983d778b96210f7f8cc0da6868304a355039

module.exports = router;
