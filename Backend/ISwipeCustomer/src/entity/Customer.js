const { Sequelize, sequelize, DataTypes } = require('../config/dbConnection')
const { nanoid } = require('nanoid');

const Customer = sequelize.define('customer', {
    c_id: {
        type: Sequelize.STRING(21),
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => nanoid()
    },
    c_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    c_dob:{
        type: DataTypes.DATE,
        allowNull: false
    },
    c_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    c_password: {
        type: DataTypes.STRING,
        allowNull: false

    }, c_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: 10
        }
    },
    c_sex: {
        type: DataTypes.CHAR,
        allowNull: false
    }

}, {
    tableName: 'customer',
    timestamps: false
})

module.exports = Customer