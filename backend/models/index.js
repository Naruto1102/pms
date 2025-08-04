// This file will define all the association and the relation that exists between the tables (1-1, 1-M etc)

// Import all the tables created
const Portfolio = require('./Portfolio')
const Asset = require('./Asset')
const Holding = require('./Holding')
const Transaction = require('./Transaction')

// Define the possible relation
// 1 Portfolio can have multiple assets and this relation can be shown through the Holding table
Portfolio.hasMany(Holding, {
    foreignKey: 'pid'
})

// 1 Portfolio can have multiple transactions
Portfolio.hasMany(Transaction, {
    foreignKey: 'pid'
})

// A single asset can have multiple Holdings via the Portfolios and multiple Transactions
Asset.hasMany(Transaction, {
    foreignKey: 'aid'
})
Asset.hasMany(Holding, {
    foreignKey: 'aid'
})

// A holding and a transaction is only created if there is a corresponding portfolio that purchases a certain asset
Holding.belongsTo(Portfolio, {
    foreignKey: 'pid'
})
Holding.belongsTo(Asset, {
    foreignKey: 'aid'
})

Transaction.belongsTo(Portfolio, {
    foreignKey: 'pid'
})
Transaction.belongsTo(Asset, {
    foreignKey: 'aid'
})

module.exports = {
    Portfolio, 
    Asset, 
    Transaction,
    Holding
}