const express = require('express')
const router = express.Router()

const { createAsset } = require('../controllers/assetController')

/*
    POST Request -> Create a new Asset
    /api/asset
*/
router.post('/', createAsset)

module.exports = router