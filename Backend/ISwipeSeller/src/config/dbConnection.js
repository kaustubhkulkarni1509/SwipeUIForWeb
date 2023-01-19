const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('iswipe', 'postgres', 'ISwipe295', {
    host: 'iswipe.cz0ysznsiwsb.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
  });

  sequelize.authenticate().then(() => {
      console.log('Successfully connected to database')
  }).catch((e) => {
      console.log('Unsuccessful Connection', e)
  })

  module.exports = {
      Sequelize,
      DataTypes,
      sequelize
  }