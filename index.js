const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const apiRoutes = require('./routes')
app.use('/',apiRoutes)

app.listen(8000);