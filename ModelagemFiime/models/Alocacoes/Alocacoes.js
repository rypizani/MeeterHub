const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Alocacoes = sequelize.define('alocacoes', {

    alocacoesId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }

}, {freezeTableName: true})

exports.Alocacoes = Alocacoes;