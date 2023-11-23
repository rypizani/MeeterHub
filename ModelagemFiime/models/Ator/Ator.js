const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Ator = sequelize.define('ator', {

    atorId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }

}, {freezeTableName: true})

exports.Ator = Ator;