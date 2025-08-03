const express = require('express')
const router = express.Router()

const { createAsset, getAllAssets, getAssetById } = require('../controllers/assetController')

/*
    GET Request -> Get all the assets
    /api/asset
*/
router.get('/', getAllAssets)

/*
    GET Request -> Get the asset for a specific ID
    /api/asset/:id
*/
router.get('/:id', getAssetById)

/*
    POST Request -> Create a new Asset
    /api/asset
*/
router.post('/', createAsset)

module.exports = router