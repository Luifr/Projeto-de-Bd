const express = require('express')
const router = express.Router()

module.exports = router;

const apiController = require('./controller')

router.get('/employees', apiController.getEmployees);

router.get('/employees/:cpf', apiController.getEmployeesByCpf);

router.get('/employees/:name', apiController.getEmployeesByName);

router.get('/employees/:position', apiController.getEmployeesByPosition);

///////////////////////////////////////////////////////////

router.get('/news', apiController.getNews);

router.get('/news/:name', apiController.getNewsByName);

router.get('/news/:date', apiController.getNewsByDate);

///////////////////////////////////////////////////////////

router.get('/episodes', apiController.getEpisodes);

router.get('/episodes/:date', apiController.getEpisodesByDate);