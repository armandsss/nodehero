const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json());



const users = []

app.post('/users', function(req, res) {
    // retrieve user posted data from the body
    const user = req.body
    users.push({
        name: user.name,
        age: user.age
    })
    res.send('successfully registered')
})