const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err =>{
        console.log('No se pudo conectar', err)
    })

module.exports = sequelize;