var express = require('express')
var app = express()
var port = 3000


const bodyParser = require('body-parser')
require('./database/mysql')
const api = require('./routes/api')
//body-parser
app.use(bodyParser.json())

//api-routes
app.use('/api', api);


app.listen(port, () => {
    console.log(`Instagram marketing app listening at http://localhost:${port}`)
})