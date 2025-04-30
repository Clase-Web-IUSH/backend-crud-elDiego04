const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

const Client = sequelize.define('Client', {

    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    identificationNumber:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        tableName: 'clients'
    }
)

module.exports = Client;