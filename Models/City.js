const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../util/database-sequelize');

const City = sequelize.define("City", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = City;