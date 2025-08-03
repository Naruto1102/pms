const express = require('express')
const router = express.Router()

const { createAsset, getAllAssets, getAssetById, getAssetBySymbol, deleteAsset } = require('../controllers/assetController')

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
    GET Request -> Get the asset for a specific Symbol
    /api/asset/symbol/:symbol
*/
router.get('/symbol/:symbol', getAssetBySymbol)

/*
    POST Request -> Create a new Asset
    /api/asset
*/
router.post('/', createAsset)

/*
    DELETE Request -> Delete the asset by the asset name
    /api/asset/:name
*/
router.delete('/', deleteAsset)

module.exports = router