const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Distribuidora = sequelize.define('distribuidora', {

    distribuidoraId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }

}, {freezeTableName: true})

exports.Distribuidora = Distribuidora;