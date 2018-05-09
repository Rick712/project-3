const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = 3000

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/tank', function(req, res) {
    res.render('pages/tank')
})

app.get('/plant', function (req, res) {
    res.render('pages/plant')
})

app.listen(port, function () {
    console.log('Server is online at ' + port)
})