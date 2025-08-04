const { createHolding, getAllHoldings, getHoldingById } = require('../controllers/holdingController')
const express = require('express')

const router = express.Router()

/*
    GET Request -> Get all the holdings
    /api/holding
*/
router.get('/', getAllHoldings)

/*
    GET Request -> Get the holding of a specific ID
    /api/holding/:id
*/
router.get('/:id', getHoldingById)

/*
    POST Request -> Create a new holding
    /api/holding
*/
router.post('/', createHolding)

module.exports = router