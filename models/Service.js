const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database');
const Car = require('./car');

const Service = sequelize.define('Service', {

    description:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cost:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    carId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'cars',
            key: 'id'
        }
    }
    }, {
        tableName: 'services'
    }
);

Service.belongsTo(Car, {foreignKey: 'carId'});
Car.hasMany(Service, {foreignKey: 'carId'});

module.exports = Service;