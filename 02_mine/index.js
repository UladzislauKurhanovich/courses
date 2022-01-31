const express = require('express');
const bodyParser = require('body-parser');
const wetherRequest = require('./requests/weather.request')

const app = express();
//b79bbd4b85eba3d05fc1a1ceb155ca6f

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index');
})
app.post('/', (req, res) => {
    const { city } = req.body

    wetherRequest(city)
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server has started on port 30000...')
})