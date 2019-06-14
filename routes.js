const express = require('express')
const router = express.Router()

module.exports = router;

const apiController = require('./controller')

router.get('/employees', apiController.getEmployees);

router.get('/employees/cpf/:cpf', apiController.getEmployeeByCpf);

router.get('/employees/name/:name', apiController.getEmployeesByName);

router.get('/employees/position/:position', apiController.getEmployeesByPosition);

// getNewsByCpf
// insertEmployee
// insertAgent

///////////////////////////////////////////////////////////

router.get('/news', apiController.getNews);

router.get('/news/name/:name', apiController.getNewsByName);

router.get('/news/date/:date', apiController.getNewsByDate);

router.get('/news/category/:category', apiController.getNewsByCategory);

// getNewsByPeriod
// getEmployeesByNews
// getNewsAirdate

///////////////////////////////////////////////////////////

router.get('/episodes', apiController.getEpisodes);

router.get('/episodes/date/:date', apiController.getEpisodesByDate);

// getNewsByEpisode
// getIbopeByEpisode

///////////////////////////////////////////////////////////

// getAdsByCPNJ
// getAdsDataByCPNJ
// getRevenueByCPNJ
// getRevenueByAd