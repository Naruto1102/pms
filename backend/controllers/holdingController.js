const Holding = require('../models/Holding')

// All the functions containing the logic behind the route handling dealing with holdings

// Function to create a new holding
const createHolding = async (req, res) => {

    try {

        const {pid, aid, quantity, avg_buy_price } = req.body
        if (!pid || !aid || !quantity || !avg_buy_price) {
            return res.status(400).json({
                message: 'INadequate records to create a holding'
            })
        }

        const newHolding = await Holding.create({
            pid: pid,
            aid: aid,
            avg_buy_price: avg_buy_price,
            quantity: quantity
        })

        res.status(200).json({
            message: 'Holding created successfully',
            newHolding
        })

    } catch (err) {
        res.status(500).json({
            message: `Error creating the holding: ${err}`
        })
    }

}

// Function to get all the holdings
const getAllHoldings = async (req, res) => {

    try {

        const holdings = await Holding.findAll()
        if (!holdings) {
            return res.status (404).json({
                message: 'No Holding Found!'
            })
        }

        res.status(200).json({
            message: 'Sure! Here are a list of all the holdings created!',
            holdings
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching the holding: ${err}`
        })
    }

}

// Function to fetch a holding by a specific ID (hid)
const getHoldingById = async (req, res) => {

    try {

        const { id } = req.params 

        const holdingMatch = await Holding.findByPk(id)
        if (!holdingMatch) {
            return res.status (404).json({
                message: 'No Holding Found!'
            })
        }

        res.status(200).json({
            message: 'Sure! Your requested ID returned a match.',
            holdingMatch
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching the holding: ${err}`
        })
    }

}

// Function to get a holding by the Portfolio ID
const getHoldingByPid = async (req, res) => {

    try {

        const { id } = req.params 

        const holdingMatch = await Holding.findAll({
            where: {
                pid: id
            }
        })
        if (!holdingMatch) {
            return res.status (404).json({
                message: 'No Holding Found with the needed PID!'
            })
        }

        res.status(200).json({
            message: 'Sure! Your requested PID returned a match.',
            holdingMatch
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching the holding: ${err}`
        })
    }

}

// Function to fetch all the holdings by a certain Asset
const getHoldingByAid = async (req, res) => {

    try {

        const { id } = req.params 

        const holdingMatch = await Holding.findAll({
            where: {
                aid: id
            }
        })
        if (!holdingMatch) {
            return res.status (404).json({
                message: 'No Holding Found with the needed AID!'
            })
        }

        res.status(200).json({
            message: 'Sure! Your requested AID returned a match.',
            holdingMatch
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching the holding: ${err}`
        })
    }

}

module.exports = {
    createHolding,
    getAllHoldings,
    getHoldingById,
    getHoldingByPid,
    getHoldingByAid
}