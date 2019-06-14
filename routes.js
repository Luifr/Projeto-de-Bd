const express = require('express')
const router = express.Router()

module.exports = router;

const apiController = require('./controller')

router.get('/employees', apiController.getEmployees);

router.post('/employees', apiController.insertEmployee);

router.post('/employees/agent', apiController.insertAgent);

///////////////////////////////////////////////////////////

router.get('/news', apiController.getNews);

// getEmployeesByNews
// getNewsAirdate

///////////////////////////////////////////////////////////

router.get('/episodes', apiController.getEpisodes);

// getNewsByEpisode
// getIbopeByEpisode

///////////////////////////////////////////////////////////

// getAdsByCPNJ
// getAdsDataByCPNJ
// getRevenueByCPNJ
// getRevenueByAd