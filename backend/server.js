const express = require('express') 
const db = require ('./config/db')
const initDB = require('./db-init')

const app = express ()

const portfolioRoutes = require('./routes/portfolioRoutes')

const PORT = process.env.PORT || 5000

// For handling the middleware related to all the object related input
app.use(express.json())

// Routes
// Portfolio Routes
app.use('/api/portfolio', portfolioRoutes)

initDB()

app.listen (PORT, () => {
    console.log ("Listening on PORT: ", PORT)
})