const express = require('express')
const rp = require('request-promise')
const path = require('path')


const app = express()

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (request, response) => {

    rp({
            uri: 'http://apidev.accuweather.com/locations/v1/search',
            qs: {
                q: req.params.city,
                apiKey: 'api-key'
                    // Use your accuweather API key here
            },
            json: true
        })
        .then((data) => {
            res.render('home', data)
        })
        .catch((err) => {
            console.log(err)
            res.render('error')
        })

})


var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port);
});