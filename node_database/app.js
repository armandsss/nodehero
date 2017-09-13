const express = require('express')
var router = express.Router();
const path = require('path')
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    firstname: { type: String, required: true, max: 100 },
    lastname: { type: String, required: true, max: 100 },
    username: { type: String, required: true, max: 100 }
});

mongoose.model('User', UserSchema);

const app = express()
app.use(bodyParser.json());

//Set up mongoose connection

var mongoDB = '..........';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))


function createUser(req, res, next) {

    req.checkBody('firstname', 'First name must be specified.').notEmpty();
    req.checkBody('lastname', 'Family name must be specified.').notEmpty();
    req.checkBody('username', 'Family name must be specified.').notEmpty();

    var user = new User({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death
    });

    user.save();
};



app.post('/users', function(req, res) {
    // retrieve user posted data from the body
    const user = req.body
    users.push({
        name: user.name,
        age: user.age
    })
    res.send('successfully registered')
})

var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port);
});