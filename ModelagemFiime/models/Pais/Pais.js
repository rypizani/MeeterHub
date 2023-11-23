const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Pais = sequelize.define('pais', {

    paisId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }

}, {freezeTableName: true})

exports.Pais = Pais;