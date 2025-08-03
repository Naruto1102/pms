// This contains all the behind-the-scene function that deals with the routes of Asset
const Asset = require('../models/Asset')

// Function to create an asset
const createAsset = async (req, res) => {

    try {

        const { symbol, name, curr_price, start_price, end_price } = req.body

        if (!symbol || !name || !curr_price || !end_price || !start_price) {
            return res.status(400).json ({
                message: 'Inadequate Records. Unable to create and list asset!'
            })
        }

        const newAsset = await Asset.create({
            symbol: symbol,
            name: name,
            curr_price: curr_price,
            start_price: start_price,
            end_price: end_price
        })

        return res.status(200).json({
            message: `${symbol} Stock regsitered successfully!`
        })

    } catch (err) {
        res.status(500).json({
            message: `Error creating the asset: ${err}`
        })
    }

}

// Function to fetch all the assets
const getAllAssets = async (req, res) => {

    try {

        const assets = await Asset.findAll()
        if (assets.length == 0) {
            return res.status (200).json ({
                message: "There are no assets to be shown."
            })
        }

        res.status(200).json({
            message: 'Here are all the assets created till date.',
            assets
        })

    } catch (err) {
        res.status(500).json({
            message: `Error displaying assets: ${err}`
        })
    }

}

// Function to get a particular asset by ID
const getAssetById = async (req, res) => {

    try {

        const { id } = req.params 

        const assetMatch = await Asset.findByPk(id)
        if (!assetMatch) {
            return res.status(404).json({
                message: 'Oops! Cant find the Asset!'
            })
        }

        res.status(200).json({
            message: 'SUre! Here is the asset',
            assetMatch
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching the asset ${err}`
        })
    }

}

// Function to get the asset by their Unique Symbol
const getAssetBySymbol = async ( req, res ) => {

    try {

        const { symbol } = req.params

        const assetMatch = await Asset.findOne({
            where: {
                symbol: symbol
            }
        })

        if (!assetMatch) {
            return res.status(404).json({
                message: 'Oops! Cant find the Asset!'
            })
        }

        res.status(200).json({
            message: 'Sure! Here is the asset',
            assetMatch
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching the asset ${err}`
        })
    }

}

// Function to delete a particular asset by its name
const deleteAsset = async (req, res) => {

    try {

        const { name } = req.body 

        const assetMatch = await Asset.findOne({
            where: {
                name: name
            }
        })

        if (!assetMatch) {
            return res.status(404).json({
                message: 'Oops! Cant find the Asset to delete'
            })
        }

        await assetMatch.destroy()

        res.status(200).json({
            message: `Deleted Asset ${name}`
        })

    } catch (err) {
        res.status(500).json({
            message: `Error deleting the asset ${err}`
        })
    }

}

module.exports = {
    createAsset,
    getAllAssets,
    getAssetById,
    getAssetBySymbol,
    deleteAsset
}