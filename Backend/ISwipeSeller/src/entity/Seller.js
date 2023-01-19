const { Sequelize, sequelize, DataTypes } = require('../config/dbConnection')
const { nanoid } = require('nanoid');

const Seller = sequelize.define('seller', {
    s_id: {
        type: Sequelize.STRING(21),
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => nanoid()
    },
    s_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    s_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    s_password: {
        type: DataTypes.STRING,
        allowNull: false

    }, s_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: 10
        }
    }

}, {
    tableName: 'seller',
    timestamps: false,
})

module.exports = Seller