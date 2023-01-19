const { Sequelize, sequelize, DataTypes } = require('../config/dbConnection')


const CustomerAddress = sequelize.define('customer_address', {
    a_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true

    },
    c_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }

}, {
    tableName: 'customer_address',
    timestamps: false
})

module.exports = CustomerAddress
