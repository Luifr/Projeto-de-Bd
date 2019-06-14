const express = require('express')
var cors = require('cors')
const app = express()

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors())

const apiRoutes = require('./routes')
app.use('/',apiRoutes)

app.listen(8000);