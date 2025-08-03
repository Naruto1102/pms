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

module.exports = {
    createAsset
}