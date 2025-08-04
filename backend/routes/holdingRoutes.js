const { createHolding, getAllHoldings, getHoldingById, getHoldingByPid, getHoldingByAid } = require('../controllers/holdingController')
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
    GET Request -> Get the holding of a specific Portfolio ID
    /api/holding/portfolio/:id
*/
router.get('/portfolio/:id', getHoldingByPid)

/*
    GET Request -> Get the holding of a specific PortfAssetolio ID
    /api/holding/asset/:id
*/
router.get('/asset/:id', getHoldingByAid)

/*
    POST Request -> Create a new holding
    /api/holding
*/
router.post('/', createHolding)

module.exports = router