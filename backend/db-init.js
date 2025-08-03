// This file has the code to import all the models, sync them and authenticate the entry to the database
const sequelize = require ('./config/db')
const Portfolio = require('./models/Portfolio')
const Asset = require('./models/Asset')
const Holding = require('./models/Holding')
const Transaction = require('./models/Transaction')

const initDB = async () => {
    try {

        await sequelize.authenticate()
        console.log("Authentication Successful! DB Connected")

        await sequelize.sync({
            alter: true
        })
        console.log ("Models Synced!")

    } catch (error) {
        console.log ("Error authenticating and syncing the models: ", error)
    }
}

module.exports = initDB