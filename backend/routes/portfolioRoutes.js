const express = require('express')
const router = express.Router()

const { createPortfolio, getAllPortfolios, getPortfolioById, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController')

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

/*
    {PUT} Request -> getting a specific portfolio by ID and updating the name
    /api/portfolio/:id
*/

router.put('/:id', updatePortfolio)

/*
    DELETE request -> Delete a portfolio by its ID
    /api/portfolio/:id
*/
router.delete('/:id', deletePortfolio)

module.exports = router