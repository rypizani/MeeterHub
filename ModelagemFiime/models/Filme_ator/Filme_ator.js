const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const FilmeAtor = sequelize.define('filme_ator', {
    
    id_filme_ator: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_filme: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_ator: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }    
           
},{freezeTableName: true})

exports.FilmeAtor = FilmeAtor;