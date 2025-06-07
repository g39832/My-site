const express = require('express')
require('dotenv').config()

//express app
const app = express()

//middle ware
app.use((req, res, next) => {
     console.log(req.path, req.method)
     next()
});

//route
app.get('/', (req, res) =>{
    res.json({msg: 'Welcome to the app'})
});

//listen for request
app.listen(process.env.PORT,() =>{
    console.log('Listen on port', process.env.PORT);
});

