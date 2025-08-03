const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Transaction = sequelize.define('Transaction', {

    tid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    pid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'portfolio',
            key: 'pid'
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    aid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'asset',
            key: 'aid'
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    type: {
        type: DataTypes.ENUM('Buy', 'Sell')
    },

    quantity: {
        type: DataTypes.INTEGER
    },

    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'transaction',
    timestamps: false
})

module.exports = Transaction