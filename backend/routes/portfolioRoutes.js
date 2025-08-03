const express = require('express')
const router = express.Router()

const { createPortfolio, getAllPortfolios, getPortfolioById } = require('../controllers/portfolioController')

/*
    GET Request
    /api/portfolio
*/
router.get('/', getAllPortfolios)

/*
    GET Request -> getting a specific portfolio by ID
    /api/portfolio/:id
*/

router.get('/:id', getPortfolioById)

/*
    POST Request
    /api/portfolio/ -> /
*/
router.post('/', createPortfolio)

module.exports = router