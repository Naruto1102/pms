// This contains all the behind-the-scenes functions that deal with the routes of Transaction
const Transaction = require('../models/Transaction')
const Asset = require('../models/Asset')
const Portfolio = require('../models/Portfolio')

// Function to create a new transaction
const createTransaction = async (req, res) => {
    
    try {

        const { pid, aid, type, quantity } = req.body

        if (!pid || !aid || !type || !quantity) {
            return res.status(400).json({
                message: 'Inadequate Records. Unable to create transaction!'
            })
        }

        const newTransaction = await Transaction.create({
            pid: pid,
            aid: aid,
            type: type,
            quantity: quantity,
            timestamp: new Date()
        })

        res.status(200).json({
            message: 'Transaction created successfully!',
            newTransaction
        })

    } catch (err) {
        res.status(500).json({
            message: `Error creating the transaction: ${err}`
        })
    }

}

// Function to fetch all the transactions
const getAllTransactions = async (req, res) => {

    try {

        const transactions = await Transaction.findAll({
            include: [
                { model: Asset, attributes: ['symbol', 'name', 'current_price'] },
                { model: Portfolio, attributes: ['name'] }
            ]
        })

        if (transactions.length === 0) {
            return res.status(200).json({
                message: 'No transactions found yet!'
            })
        }

        res.status(200).json({
            message: 'Here are all the transactions recorded.',
            transactions
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching transactions: ${err}`
        })
    }

}

// Function to get a single transaction by ID
const getTransactionById = async (req, res) => {

    try {

        const { tid } = req.params

        const transaction = await Transaction.findByPk(tid, {
            include: [
                { model: Asset, attributes: ['symbol', 'name'] },
                { model: Portfolio, attributes: ['name'] }
            ]
        })

        if (!transaction) {
            return res.status(404).json({
                message: 'Oops! Could not find the transaction.'
            })
        }

        res.status(200).json({
            message: 'Sure! Here is the transaction.',
            transaction
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching transaction: ${err}`
        })
    }

}

// Function to update a transaction (type and/or quantity)
const updateTransaction = async (req, res) => {

    try {

        const { tid } = req.params
        const { type, quantity } = req.body

        const transaction = await Transaction.findByPk(tid)

        if (!transaction) {
            return res.status(404).json({
                message: 'Oops! Cannot find the transaction to update.'
            })
        }

        if (type) transaction.type = type
        if (quantity) transaction.quantity = quantity

        await transaction.save()

        res.status(200).json({
            message: 'Transaction updated successfully!',
            transaction
        })

    } catch (err) {
        res.status(500).json({
            message: `Error updating transaction: ${err}`
        })
    }

}

// Function to delete a transaction
const deleteTransaction = async (req, res) => {

    try {

        const { tid } = req.params

        const transaction = await Transaction.findByPk(tid)

        if (!transaction) {
            return res.status(404).json({
                message: 'Oops! Cannot find the transaction to delete.'
            })
        }

        await transaction.destroy()

        res.status(200).json({
            message: `Deleted Transaction with ID ${tid}`
        })

    } catch (err) {
        res.status(500).json({
            message: `Error deleting transaction: ${err}`
        })
    }

}

// Function to get all transactions for a specific portfolio
const getTransactionsByPortfolio = async (req, res) => {

    try {

        const { pid } = req.params

        const transactions = await Transaction.findAll({
            where: { pid },
            include: [
                { model: Asset, attributes: ['symbol', 'name'] },
                { model: Portfolio, attributes: ['name'] }
            ]
        })

        if (transactions.length === 0) {
            return res.status(404).json({
                message: `No transactions found for Portfolio ID ${pid}`
            })
        }

        res.status(200).json({
            message: `Transactions for Portfolio ID ${pid}`,
            transactions
        })

    } catch (err) {
        res.status(500).json({
            message: `Error fetching portfolio transactions: ${err}`
        })
    }

}


module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    getTransactionsByPortfolio
}
