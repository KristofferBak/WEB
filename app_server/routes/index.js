const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

const ctrlExercises = require('../controllers/exercises');
const ctrlUsers = require('../controllers/users');
const ctrlWorkouts = require('../controllers/workouts');
const ctrlAuth = require('../controllers/authentication');
const ctrlActivities = require('../controllers/activities');

router.get('/', ctrlUsers.getAllUsers);
router.get('/users', ctrlUsers.getAllUsers);

router.post('/user/:userId/workout/:workoutId/exercises/:exerciseId/createActivity', ctrlActivities.createActivity);

//router.get('/users/:id', ctrlUsers.getUser);

router.post('/users/createUser', ctrlUsers.createUser);

router.get('/user/:userId/workouts', ctrlWorkouts.getUserId);
router.post('/user/:userId/workouts/createWorkout',ctrlWorkouts.createWorkout);

router.get('/user/:userId/workout/:workoutId/exercises', ctrlExercises.getWorkoutId);
router.post('/user/:userId/workout/:workoutId/exercises/createExercise', ctrlExercises.createExercise);

//endpoint til login og register
router.post('/register', ctrlAuth.register);    
router.post('/login', ctrlAuth.login);

module.exports = router;
