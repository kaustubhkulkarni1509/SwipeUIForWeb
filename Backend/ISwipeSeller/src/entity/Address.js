const { Sequelize, sequelize, DataTypes } = require('../config/dbConnection')


const Address = sequelize.define('address', {
    a_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    a_line1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    a_zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    a_line2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    a_city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    a_state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    a_country: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'address',
    timestamps: false
})

module.exports = Address