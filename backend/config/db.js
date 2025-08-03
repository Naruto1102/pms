// const mysql = require('mysql2')

// // Define the create connect string
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'saranya',
//     database: 'portfolio_db'
// })

// // Make the connection
// db.connect ((err) => {
//     if (err) {
//         console.error ("Error connecting to the database: ", err)
//         return // Dont make any other attempts to the connect to the database
//     } 

//     console.log ("Successfully connected to the database!")
// })

// // Export the connection string
// module.exports = db

// The above code uses MYSQL in its RAW form. The below code uses Sequalize which hopefully makes things easier
const { Sequelize } = require('sequelize')

// Create a sequelize instance
const sequelize = new Sequelize ('portfolio_db', 'root', 'saranya', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

// Function to test the connection made
async function testConnection () {
    try {

        await sequelize.authenticate()
        console.log ("Connection successfully established between server, database and Sequelize!")

    } catch (err) {
        console.log ("Unable to form connection: ", err)
    }
}

testConnection ()

module.exports = sequelize