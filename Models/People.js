const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../util/database-sequelize');

const People = sequelize.define("People", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    gender: DataTypes.STRING
});

module.exports = People;