const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Registro = sequelize.define('registro', {

    registroId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }, 
    endereco: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    CEP: {
        type: DataTypes.STRING(11),
        allowNull: false,
    }

}, {freezeTableName: true})

exports.Registro = Registro;