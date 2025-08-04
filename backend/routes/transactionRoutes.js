const express = require('express')
const router = express.Router()

const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  deleteTransaction,
  updateTransaction,
  getTransactionsByPortfolio
} = require('../controllers/transactionController')

/*
    GET Request -> Get all transactions
    /api/transactions
*/
router.get('/', getAllTransactions)

/*
    GET Request -> Get a transaction by tid
    /api/transactions/:tid
*/
router.get('/:tid', getTransactionById)

/*
    POST Request -> Create a new transaction
    /api/transactions
*/
router.post('/', createTransaction)

/*
    PATCH Request -> Update a transaction (quantity or price)
    /api/transactions/:tid
*/
router.patch('/:tid', updateTransaction)

/*
    DELETE Request -> Delete a transaction by tid
    /api/transactions/:tid
*/
router.delete('/:tid', deleteTransaction)

/*
    GET Request -> Get all transactions for a given portfolio
    /api/transactions/portfolio/:pid
*/
router.get('/portfolio/:pid', getTransactionsByPortfolio)

module.exports = router
