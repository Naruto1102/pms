const express = require('express')
const router = express.Router()

const { createPortfolio } = require('../controllers/portfolioController')

/*
    POST Request
    /api/portfolio/ -> /
*/
router.post('/', createPortfolio)

module.exports = router