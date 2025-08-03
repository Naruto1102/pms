const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Holding = sequelize.define ('Holding', {
    hid: {
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

    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    avg_buy_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'holding',
    timestamps: false
})

module.exports = Holding