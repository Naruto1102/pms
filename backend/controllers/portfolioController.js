// This code contains all the functions that deal with all the routes to do with the Portfolio Page

// Import the portfolio from the model
const Portfolio = require('../models/Portfolio')

// Get all the portfolios in the page function
const getAllPortfolios = async (req, res) => {

    try {

        const portfolios = await Portfolio.findAll()
        if (portfolios.length == 0) {
            return res.status(200).json ({
                message: 'No Portfolios created yet!'
            })
        } else {
            res.status(200).json({
                message: 'Here are all the portfolios',
                portfolios
            })
        }

    } catch (err) {
        return res.status(500).json({
            message: `Error returning portfolios: ${err}`
        })
    }

}

// Create Portfolio function
const createPortfolio = async (req, res) => {
    try {

        // Get the input from the body
        const { name } = req.body

        if (!name) {
            return res.status (400).json ({
                message: 'Name field is required in creating a Portfolio'
            })
        }

        // If the name is provided, create the portfolio
        const newPortfolio = await Portfolio.create({
            name: name
        })

        res.status(200).json ({
            message: `${name} Portfolio created successfully`
        })

    } catch (err) {
        return res.status(500).json ({
            error: `Internal Server Error: ${err}`
        })
    }
}

module.exports = {
    createPortfolio,
    getAllPortfolios
}