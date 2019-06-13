const express = require('express')
const router = express.Router()

module.exports = router;

const apiController = require('./controller')

router.get('/', apiController.greet);