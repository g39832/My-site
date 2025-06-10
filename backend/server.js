const express = require('express')
require('dotenv').config()

//express app
const app = express()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//middle ware
app.use(express.json())

app.use((req, res, next) => {
     console.log(req.path, req.method)
     next()
});

//route
app.use('/api/workouts',workoutRoutes)


//Connect to DB

mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    //listen for request
    app.listen(process.env.PORT,() =>{
    console.log('Listen on port', process.env.PORT);
});

 })
 .catch((error) =>{
    console.log(error)
 })


