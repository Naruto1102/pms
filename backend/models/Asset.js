const { DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../config/db')

const Asset = sequelize.define('Asset', {
  aid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  name: {
    type: DataTypes.STRING
  },

  current_price: {
    type: DataTypes.INTEGER
  },

  start_price: {
    type: DataTypes.INTEGER
  },

  end_price: {
    type: DataTypes.INTEGER
  },

  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
}, {
  tableName: 'asset',
  timestamps: false
})

module.exports = Asset
