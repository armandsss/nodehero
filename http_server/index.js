const express = require('express')
const path = require('path')


const app = express()

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})


var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port);
});