const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = 3000

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.listen(port, function () {
    console.log('Server is online at ' + port)
})