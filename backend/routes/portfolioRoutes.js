const express = require('express')
const router = express.Router()

const { createPortfolio, getAllPortfolios } = require('../controllers/portfolioController')

/*
    GET Request
    /api/portfolio
*/
router.get('/', getAllPortfolios)

/*
    POST Request
    /api/portfolio/ -> /
*/
router.post('/', createPortfolio)

module.exports = router