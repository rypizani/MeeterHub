const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');


const FilmeAlocacoes = sequelize.define('filme_alocacoes', {
    
    id_filme_alocacoes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_filme: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_filme_distribuidora: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }    
           
},{freezeTableName: true})

exports.FilmeAlocacoes = FilmeAlocacoes;