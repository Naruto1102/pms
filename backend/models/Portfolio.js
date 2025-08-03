const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Portfolio = sequelize.define('Portfolio', {
  pid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'portfolio',
  timestamps: false
})

module.exports = Portfolio
