const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'A@123456789', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

