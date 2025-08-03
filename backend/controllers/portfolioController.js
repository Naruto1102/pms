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

// A function to get the Portfolio by the unique ID ( primary key)
const getPortfolioById = async (req, res) => {

    try {

        const { id } = req.params
        const portfolioMatch = await Portfolio.findByPk(id)

        if (!portfolioMatch) {
            return res.status(404).json({
                message: 'Oops! No such portfolio exists'
            })
        } else {
            res.status(200).json({
                message: "Hey, Here is the portfolio you were looking for!",
                portfolioMatch
            })
        }

    } catch (err) {
        return res.status(500).json({
            message: `Error in displaying the portfolio: ${err}`
        })
    }

}

// Function to update the details of the protfolio ( just the name ) by its ID
const updatePortfolio = async (req, res) => {

    try {

        const { id } = req.params
        const { new_name } = req.body // The New Name of the Portfolio

        const portfolio = await Portfolio.findByPk(id) 
        const old_name = portfolio.name

        if (!portfolio) {
            return res.status(404).json ({
                message: "Oops! No such portfolio found!"
            })
        } else {
            portfolio.name = new_name
            portfolio.save()

            return res.status(200).json({
                message: `Portfolio ${old_name} changed to ${new_name}`,
                portfolio
            })
        }

    } catch (err) {

        res.status(500).json({
            message: `Error updating the Portfolio Details: ${err}`
        })

    }

}

// Function to delete a portfolio by its ID
const deletePortfolio = async (req, res) => {

    try {

        const { id } = req.params

        const portfolio = await Portfolio.findByPk(id)
        if (!portfolio) {
            return res.status(404).json ({
                message: "Oops! No such portfolio found!"
            })
        } else {
            await portfolio.destroy()
            return res.status(200).json({
                message: "Portfolio deleted successfully!"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: `Error deleting the portfolio: ${err}`
        })
    }

}

module.exports = {
    createPortfolio,
    getAllPortfolios,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
}