const express = require('express')

const router = express.Router()

//Get request for all workouts
router.get('/', (req,res) =>{
    res.json({mssg: 'get all workouts'})
});

//Get one workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'Get single workout'})
});


//Post request 
router.post('/', (req,res) => {
    res.json({mssg: 'Post a new workout'})
});

//Delete workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'Delete a workout'})
});

//Update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'Update a workout'})
});

module.exports = router