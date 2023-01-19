const { Sequelize, sequelize, DataTypes } = require('../config/dbConnection')


const SellerAddress = sequelize.define('seller_address', {
    a_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true

    },
    s_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }

}, {
    tableName: 'seller_address',
    timestamps: false
})

module.exports = SellerAddress