const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database');
const Client = require('./Client');
const Car = sequelize.define('Car', {

    brand:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    model:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
    licensePlate:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    clientId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'clients',
            key: 'id'
        }
    }
    }, {
        tableName: 'cars'
    }
);

Car.belongsTo(Client, {foreignKey: 'clientId'})
Client.hasMany(Car, {foreignKey: 'clientId'})

module.exports = Car;  