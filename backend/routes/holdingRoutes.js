const { createHolding } = require('../controllers/holdingController')
const express = require('express')

const router = express.Router()

/*
    POST Request -> Create a new holding
    /api/holding
*/
router.post('/', createHolding)

module.exports = router