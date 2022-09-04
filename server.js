const express = require('express')
const api = require('./server/routes/api')
const mongoose = require('mongoose')
const PORT = 4000
const app = express()

mongoose.connect("mongodb://localhost/games");

app.use(express.json());
app.use('/', api)

app.listen(PORT, function(){
    console.log(`The server is listening on port : ${PORT}`);
})